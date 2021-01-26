const SET_OPEN_MENU = "SET_OPEN_MENU";

let initialState = {
  isBurgerMenuOpen: false,
};

const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OPEN_MENU:
      return { ...state, isBurgerMenuOpen: action.open };
    default:
      return state;
  }
};

export const setOpenBurgerMenu = (open) => ({ type: SET_OPEN_MENU, open });

export default burgerReducer;
