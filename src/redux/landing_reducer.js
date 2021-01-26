import img1_1 from "../assets/img/perfumes/1/QueenofSeductionAntonioBanderas.png";
import img1_2 from "../assets/img/perfumes/1/MarryMeLanvin.png";
import img1_3 from "../assets/img/perfumes/1/SoScandalJeanPaulGaultier.png";

import img2_1 from "../assets/img/perfumes/2/DKNYBeDeliciousFreshBlossomEaudeIntenseDonnaKaran.png";
import img2_2 from "../assets/img/perfumes/2/EspeciallyEscadaElixirEscada.png";
import img2_3 from "../assets/img/perfumes/2/HerSecretGameAntonioBanderas.png";

import img3_1 from "../assets/img/perfumes/3/MarryMealaFolieLanvin.png";
import img3_2 from "../assets/img/perfumes/3/Tiffany&CoIntenseTiffany.png";
import img3_3 from "../assets/img/perfumes/3/EspeciallyEscadaEscada.png";

const SET_NEXT_MONTH_OFFER = "SET_NEXT_MONTH_OFFER";
const SET_PREV_MONTH_OFFER = "SET_PREV_MONTH_OFFER";
const ACTIVATE_ANIMATION = "ACTIVATE_ANIMATION";
const DEACTIVATE_ANIMATION = "DEACTIVATE_ANIMATION";

let initialState = {
  offers: [
    {
      title: "Набор февраля",
      first: { name: "Queen of Seduction Antonio Banderas", img: img1_1 },
      second: { name: "Marry Me Lanvin", img: img1_2 },
      third: { name: "So Scandal! Jean Paul Gaultier", img: img1_3 },
    },
    {
      title: "Набор марта",
      first: {
        name: "DKNY Be Delicious Fresh Blossom Eau de Intense Donna Karan",
        img: img2_1,
      },
      second: { name: "Especially Escada Elixir Escada", img: img2_2 },
      third: { name: "Her Secret Game Antonio Banderas", img: img2_3 },
    },
    {
      title: "Набор апреля",
      first: { name: "Marry Me a la Folie Lanvin", img: img3_1 },
      second: { name: "Tiffany & Co Intense Tiffany", img: img3_2 },
      third: { name: "Especially Escada Escada", img: img3_3 },
    },
  ],
  currentMonth: "Набор февраля",
  firstPerfume: { name: "Queen of Seduction Antonio Banderas", img: img1_1 },
  secondPerfume: { name: "Marry Me Lanvin", img: img1_2 },
  thirdPerfume: { name: "So Scandal! Jean Paul Gaultier", img: img1_3 },
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
