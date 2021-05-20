import { UIStateType } from "./types";
import { UI_ERROR, UI_LOADING, UI_RESET } from "../../../actions";
import { Action } from "../../../actions/types";

export const getNewUiLoadingState = function (
  currentState: any = {},
  key: string,
  value: boolean
) {
  return {
    ...currentState,
    loading: { ...currentState.loading, [key]: value },
  };
};

export const UIDefaultState: UIStateType = {
  errors: {},
  loading: {},
};

export default (state = UIDefaultState, action: Action) => {
  switch (action.type) {
    case UI_RESET:
      return state;
    case UI_LOADING.START:
      return getNewUiLoadingState(state, action.key, true);
    case UI_LOADING.END:
      return getNewUiLoadingState(state, action.key, false);
    case UI_ERROR:
      return {
        ...state,
        errors: { ...state.errors, [action.key]: action.value },
      };
    default:
      return state;
  }
};
