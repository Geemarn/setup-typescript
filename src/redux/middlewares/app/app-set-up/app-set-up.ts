import { message as AntMessage } from "antd";
import { isEmpty, isString } from "lodash";
import { Middleware } from "redux";
import { push } from "connected-react-router";
import { batch } from "react-redux";
import { ReducerState } from "../../../reducers/types";
import {
  startUILoading,
  stopUILoading,
  updateUIError,
  updateSessionToken,
  SEND_HTTP_REQUEST,
  NAVIGATE_TO,
} from "../../../actions";
import { createApiRequest } from "../../../../service.config/axios";

export const sendHttpRequest: Middleware<unknown, ReducerState> =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type === SEND_HTTP_REQUEST.START) {
      const {
        method,
        url,
        key = "app",
        payload,
        onError,
        successMessage,
        params,
        onSuccess,
        nextRoute,
        errorMessage,
        noSuccessMessage = false,
        noErrorMessage = false,
      } = action?.meta ?? {};
      // pass in config data
      const config = {
        method,
        url,
        data: null,
        params: null,
      };
      if (payload && (!isEmpty(payload) || payload instanceof FormData)) {
        config.data = payload;
      }
      if (params && !isEmpty(params)) {
        config.params = params;
      }
      // dispatched action wrapped in batch to avoid multiple re-render
      batch(() => {
        dispatch(updateUIError(key, null));
        dispatch(startUILoading(key));
      });
      // make request using axios
      createApiRequest(config)
        .then((response: any) => {
          const { data, meta = null } = response;
          batch(() => {
            // set session token if there is
            if (meta && meta.token) {
              dispatch(updateSessionToken(meta.token));
            }
            // on successful http request
            if (onSuccess) {
              if (typeof onSuccess === "function") {
                onSuccess(data);
              } else {
                dispatch({ type: onSuccess, payload: data });
              }
            }
            // navigate to next route
            if (nextRoute) dispatch(push(nextRoute));
            // stop ui loading
            dispatch(stopUILoading(key));
            const notificationMessage = successMessage || meta?.message;
            if (!noSuccessMessage && notificationMessage) {
              AntMessage.success({
                content: notificationMessage,
                key,
                duration: 4,
              });
            }
          });
        })
        .catch((e) => {
          batch(() => {
            const showErrorMessage = (errMessage: string) => {
              if (
                !noErrorMessage &&
                method.toLowerCase() !== "get" &&
                errMessage
              ) {
                if (isString(errMessage))
                  AntMessage.error({ content: errMessage, key, duration: 4 });
              }
            };
            if (onError) {
              if (typeof onError === "function") {
                onError(e);
              } else {
                const message =
                  errorMessage ?? e.message ?? "there was a problem";
                dispatch(updateUIError(key, message));
                showErrorMessage(message);
              }
            } else {
              const error = e?.data?.meta?.error || e?.error || e;
              dispatch(updateUIError(key, errorMessage ?? error));
              showErrorMessage(errorMessage ?? error);
            }
            dispatch(stopUILoading(key));
          });
        });
    }
    return next(action);
  };

// navigation handled by connected router
const navigateTo: Middleware<unknown, ReducerState> =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);
    if (action.type === NAVIGATE_TO) {
      if (isString(action.password)) dispatch(push(action.payload));
    }
  };

export default [sendHttpRequest, navigateTo];
