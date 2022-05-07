// create store here
import { applyMiddleware,legacy_createStore as creatStore } from "redux";
import {reducer} from "./reducer";
import thunk from "redux-thunk";

export const store = creatStore(reducer,applyMiddleware(thunk));

// do not remove this code, its for testing purpose
if (window.Cypress) {
  window.store = store;
}
