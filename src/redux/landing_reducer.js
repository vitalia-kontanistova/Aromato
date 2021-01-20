import img1 from "../assets/img/perfumes/img_1.png";
import img2 from "../assets/img/perfumes/img_2.png";
import img3 from "../assets/img/perfumes/img_3.png";

const SET_NEXT_MONTH_OFFER = "SET_NEXT_MONTH_OFFER";
const SET_PREV_MONTH_OFFER = "SET_PREV_MONTH_OFFER";
const ACTIVATE_ANIMATION = "ACTIVATE_ANIMATION";
const DEACTIVATE_ANIMATION = "DEACTIVATE_ANIMATION";

let initialState = {
  offers: [
    {
      title: "Набор февраля",
      first: { name: "first name февраля", img: img1 },
      second: { name: "second name февраля", img: img1 },
      third: { name: "third name февраля", img: img1 },
    },
    {
      title: "Набор марта",
      first: { name: "first name марта", img: img2 },
      second: { name: "second name марта", img: img2 },
      third: { name: "third name марта", img: img2 },
    },
    {
      title: "Набор апреля",
      first: { name: "first name апреля", img: img3 },
      second: { name: "second name апреля", img: img3 },
      third: { name: "third name апреля", img: img3 },
    },
  ],
  currentMonth: "Набор февраля",
  firstPerfume: { name: "first name", img: img1 },
  secondPerfume: { name: "second name", img: img1 },
  thirdPerfume: { name: "third name", img: img1 },
  isAnimationActive: false,
};

const landingReducer = (state = initialState, action) => {
  let perfumes = state.offers; // излишне ???

  switch (action.type) {
    case SET_NEXT_MONTH_OFFER:
      perfumes = state.offers; // излишне ??? попробовать вызвать отсюда setCurrentMonthOffer()
      perfumes.push(perfumes.shift());
      return {
        ...state,
        offers: perfumes,
        currentMonth: perfumes[0].title,
        firstPerfume: perfumes[0].first,
        secondPerfume: perfumes[0].second,
        thirdPerfume: perfumes[0].third,
      };
    case SET_PREV_MONTH_OFFER:
      perfumes = state.offers; // излишне ???
      perfumes.unshift(perfumes.pop());
      return {
        ...state,
        offers: perfumes,
        currentMonth: perfumes[0].title,
        firstPerfume: perfumes[0].first,
        secondPerfume: perfumes[0].second,
        thirdPerfume: perfumes[0].third,
      };
    case ACTIVATE_ANIMATION:
      return { ...state, isAnimationActive: true };
    case DEACTIVATE_ANIMATION:
      return { ...state, isAnimationActive: false };
    default:
      return state;
  }
};

export const setNextMonthOffer = () => ({ type: SET_NEXT_MONTH_OFFER });
export const setPrevMonthOffer = () => ({ type: SET_PREV_MONTH_OFFER });

export const activateAnimation = () => ({ type: ACTIVATE_ANIMATION });
export const deactivateAnimation = () => ({ type: DEACTIVATE_ANIMATION });

export default landingReducer;
