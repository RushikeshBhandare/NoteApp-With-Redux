import { createStore } from "redux";
import { combineReducers } from "redux";
import addReducer from "../reducers/reducers";

const redudcer = combineReducers({
    add: addReducer
})
const Store = createStore(addReducer)

export default Store