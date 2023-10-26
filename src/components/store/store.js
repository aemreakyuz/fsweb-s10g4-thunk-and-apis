import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { rootReducers } from "./reducers/index.js";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleWares = applyMiddleware(thunk, logger);

export const myStore = createStore(
  rootReducers,
  composeWithDevTools(middleWares)
);
