import { combineReducers, createStore } from "redux";
import TodoReducer from "./TodoReducer";

const reducers=combineReducers({
    todos:TodoReducer
})

const store=createStore(reducers)

export default store