import { ActionCreator } from "./action";
import axios from 'axios';

export const fetchRates = () => {
  return async (dispatch) => {
    const response = await axios.get(`https://www.cbr-xml-daily.ru/daily_json.js`);
    dispatch(ActionCreator.loadCurrentRates(response.data.Valute.USD.Value));
  };
};
