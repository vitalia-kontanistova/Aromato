import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import burgerReducer from "./burger_reducer";
import landingReducer from "./landing_reducer";
import userReducer from "./user_reducer";

let reducers = combineReducers({
  userReducer: userReducer,
  landingReducer: landingReducer,
  burgerReducer: burgerReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
