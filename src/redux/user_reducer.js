import { usersAPI } from "../api/api";

const SET_USER_IP = "SET_USER_IP";
const SET_OS = "SET_OS";
const SET_BROWSER = "SET_BROWSER";

let initialState = {
  userIp: null,
  userOs: null,
  userBrowser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_IP:
      return { ...state, userIp: action.ip };
    case SET_OS:
      return { ...state, userOs: action.os };
    case SET_BROWSER:
      return { ...state, userBrowser: action.br };
    default:
      return state;
  }
};

export const setUserIp = (ip) => ({ type: SET_USER_IP, ip });
export const setUserOs = (os) => ({ type: SET_OS, os });
export const setUserBrowser = (br) => ({ type: SET_BROWSER, br });

export const setUserMetaDataThunkCreator = () => {
  return (dispatch) => {
    dispatch(setUserOs(usersAPI.setOS()));
    dispatch(setUserBrowser(usersAPI.setBrowser()));
    usersAPI.setIP().then((responce) => {
      dispatch(setUserIp(responce.ip));
    });
  };
};

export const sendUserMetaDataThunkCreator = (userOs, userBrowser, userIp) => {
  return (dispatch) => {
    usersAPI.sendUserMetaData(userOs, userBrowser, userIp);
  };
};

export const sendUserDataThunkCreator = (name, email, phone) => {
  return (dispatch) => {
    usersAPI.sendUserData(name, email, phone);
  };
};

export default userReducer;
