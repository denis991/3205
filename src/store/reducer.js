import { LANGUAGES } from "../const/const";
import { ActionType } from "./action";

const initialState = {
  isDataLoaded: false,
  currentLanguage: LANGUAGES[(navigator.language || navigator.userLanguage).slice(0,2)],
  currentRate: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_LANGUAGE:
      return {
        ...state,
        currentLanguage: action.payload,
      };
    case ActionType.LOAD_CURRENT_RATES:
      return {
        ...state,
        currentRate: action.payload,
      }  
  }
  return state;
}

export {reducer};