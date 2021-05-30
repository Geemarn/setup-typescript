import { UIStateType } from "./types";
import {
  UI_ERROR,
  UI_LOADING,
  UI_RESET,
  CHANGE_LAYOUT_THEME,
  CHANGE_RTL_MODE,
  CHANGE_MENU_MODE,
} from "../../../actions";
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
  switchTheme: false,
  switchRTL: false,
  topMenu: false,
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
    case CHANGE_LAYOUT_THEME:
      return { ...state, switchTheme: action.payload };
    case CHANGE_RTL_MODE:
      return { ...state, switchRTL: action.payload };
    case CHANGE_MENU_MODE:
      return { ...state, topMenu: action.payload };
    default:
      return state;
  }
};
