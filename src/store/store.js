import {createStore} from "redux";

import rootReducer from "./rootReducer";
import {items} from "../items";
import {groups} from "../groups";
import {batches} from "../batches";


const initialState = {
  items,
  groups,
  batches,
}

const store = createStore(rootReducer,initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;