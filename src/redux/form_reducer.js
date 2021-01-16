import { usersAPI } from "../api/api";

const SET_USER_IP = "SET_USER_IP";

let initialState = { userIp: 123, b: "bbb" };

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_IP:
      return { ...state, userIp: action.userIp };
    default:
      return state;
  }
};

export const setUserIp = (userIp) => ({ type: SET_USER_IP, userIp });

export const setUserIpThunkCreator = () => {
  debugger;
  return (dispatch) => {
    usersAPI.getIP().then((responce) => {
      debugger;
      dispatch(setUserIp(responce.ip));
    });
  };
};

export default formReducer;
