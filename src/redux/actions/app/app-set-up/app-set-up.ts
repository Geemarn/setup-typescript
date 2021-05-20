import { SendRequestType } from "./types";
import {
  createActionType,
  createActionString,
} from "../../../../_shared/utils";

const baseType = "app";
export const SEND_HTTP_REQUEST = createActionType(
  "SEND_HTTP_REQUEST",
  baseType
);
export const UPDATE_SESSION_TOKEN = createActionString(
  "UPDATE_SESSION_TOKEN",
  baseType
);
export const NAVIGATE_TO = createActionString("NAVIGATE_TO", baseType);

export const sendHttpRequest = (meta: SendRequestType) => ({
  type: SEND_HTTP_REQUEST.START,
  meta,
});

export const updateSessionToken = (token: string) => ({
  type: UPDATE_SESSION_TOKEN,
  payload: token,
});

export const navigateTo = (path: string) => ({
  type: NAVIGATE_TO,
  payload: path,
});
