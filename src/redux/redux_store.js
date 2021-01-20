import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import landingReducer from "./landing_reducer";
import userReducer from "./user_reducer";

let reducers = combineReducers({
  userReducer: userReducer,
  landingReducer: landingReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
