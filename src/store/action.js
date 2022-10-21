export const ActionType = {
  SET_CURRENT_LANGUAGE: `language/setCurrentLanguage`,
  LOAD_CURRENT_RATES: `rates/loadCurrentRates`,
};

export const ActionCreator = {
  setCurrentLanguage: (newLanguage) => ({
    type: ActionType.SET_CURRENT_LANGUAGE,
    payload: newLanguage,
  }),

  loadCurrentRates: (rates) => ({
    type: ActionType.LOAD_CURRENT_RATES,
    payload: rates,
  }),
};