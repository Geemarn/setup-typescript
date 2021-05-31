import { ReactNode } from "react";
import {
  createActionString,
  createActionType,
} from "../../../../_shared/utils";

const baseType = "app";
export const UI_RESET = createActionString("UI_RESET", baseType);
export const UI_LOADING = createActionType("UI_LOADING", baseType);
export const UI_ERROR = createActionString("UI_ERROR", baseType);
export const UI_NAVIGATE = createActionString("UI_NAVIGATE", baseType);
export const CHANGE_LAYOUT_THEME = createActionString(
  "CHANGE_LAYOUT_THEME",
  baseType
);

export const resetUI = () => ({
  type: UI_RESET,
});

export const startUILoading = (key: string) => {
  console.log("keykeykey:::", key);
  return {
    type: UI_LOADING.START,
    key,
  };
};

export const stopUILoading = (key: string) => ({
  type: UI_LOADING.END,
  key,
});

export const updateUIError = (
  key: string,
  value: string | null | ReactNode
) => ({
  type: UI_ERROR,
  key,
  value,
});

export const changeLayoutTheme = (changeTheme: boolean) => {
  return {
    type: CHANGE_LAYOUT_THEME,
    payload: changeTheme,
  };
};
