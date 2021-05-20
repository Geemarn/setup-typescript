import { AppStateType } from "./types";
import { Action } from "../../../actions/types";
import { UPDATE_SESSION_TOKEN } from "../../../actions/app/app-set-up/app-set-up";

const AppDefaultState: AppStateType = {
  auth: null,
  session: null,
  profile: null,
};

export default (state = AppDefaultState, action: Action) => {
  switch (action.type) {
    case UPDATE_SESSION_TOKEN:
      return {
        ...state,
        session: action.payload,
      };
    default:
      return state;
  }
};
