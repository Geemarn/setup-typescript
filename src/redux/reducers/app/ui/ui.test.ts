import uiReducer, { UIDefaultState, getNewUiLoadingState } from "./ui";
import { UI_ERROR, UI_LOADING, UI_RESET } from "../../../actions";

describe("ui reducer test", () => {
  // 1.
  it("should return initial state", () => {
    expect(uiReducer(undefined, { type: "" })).toEqual(UIDefaultState);
  });
  // 2.
  it("should handle UI RESET", () => {
    expect(uiReducer(UIDefaultState, { type: UI_RESET })).toEqual(
      UIDefaultState
    );
  });
  // 3.
  it("should handle UI LOADING START", () => {
    expect(
      uiReducer(UIDefaultState, {
        type: UI_LOADING.START,
        value: true,
        key: "app",
      })
    ).toEqual({
      ...UIDefaultState,
      loading: {
        app: true,
      },
    });
  });
  // 4.
  it("should handle UI LOADING END", () => {
    expect(
      uiReducer(UIDefaultState, {
        type: UI_LOADING.END,
        value: false,
        key: "app",
      })
    ).toEqual({
      ...UIDefaultState,
      loading: {
        app: false,
      },
    });
  });
  // 5.
  it("should handle UI ERROR", () => {
    // with null value
    expect(
      uiReducer(UIDefaultState, {
        type: UI_ERROR,
        value: null,
        key: "app",
      })
    ).toEqual({
      ...UIDefaultState,
      errors: {
        app: null,
      },
    });
    expect(
      uiReducer(UIDefaultState, {
        type: UI_ERROR,
        value: "some test error goes here",
        key: "app",
      })
    ).toEqual({
      ...UIDefaultState,
      errors: {
        app: "some test error goes here",
      },
    });
  });
});

describe("getNewUiLoadingState", () => {
  it("should handle getNewUiLoadingState", () => {
    expect(getNewUiLoadingState(UIDefaultState, "app", true)).toEqual({
      ...UIDefaultState,
      loading: {
        app: true,
      },
    });
    expect(getNewUiLoadingState(UIDefaultState, "app", false)).toEqual({
      ...UIDefaultState,
      loading: {
        app: false,
      },
    });
  });
});
