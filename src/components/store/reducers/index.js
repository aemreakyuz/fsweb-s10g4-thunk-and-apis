import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";
import { favReducer } from "./favReducer";

export const rootReducers = combineReducers({
  data: dataReducer,
  favorites: favReducer,
});
