import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import { createLogger } from "redux-logger";
import { createBrowserHistory } from "history";
import customMiddleWares from "./middlewares";
import appReducers from "./reducers";
import { UIDefaultState } from "./reducers/app/ui/ui";
import { Action } from "./actions/types";

function loadState() {
  try {
    const serializedState = localStorage.getItem("voomsway-web-aggregator");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}

function saveState(state: any) {
  try {
    localStorage.setItem("voomsway-web-aggregator", JSON.stringify(state));
  } catch (e) {
    console.log("E:::", e);
  }
}

// history from createBrowserHistory
export const history = createBrowserHistory();
const rootReducer = (state: any, action: Action) => {
  if (action.type === "RESET_APP_STATE") {
    // Re-initializes default UI state
    state = {
      ui: UIDefaultState,
    };
  }
  return appReducers(history)(state, action);
};

// add the middleWares
const middleWares = [...customMiddleWares, routerMiddleware(history)];

if (process.env.NODE_ENV !== "production") {
  middleWares.push(createLogger());
}

// apply the middleware
let middleware = applyMiddleware(...middleWares);

if (
  process.env.NODE_ENV !== "production" &&
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  middleware = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__());
}

const persistedState = loadState();

// create the store
const store = createStore(rootReducer, persistedState, middleware);

store.subscribe(() => {
  saveState({ app: store.getState().app });
});

export default store;
