// criar uma actiontype
export const ADD_ELEMENT = 'ADD_ELEMENT';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';

export function createActionSaveLogin(email) {
  return {
    type: ADD_ELEMENT,
    email,
  };
}
export const saveCurrencies = (currencies) => ({
  type: SAVE_CURRENCIES,
  currencies: Object.keys(currencies),
});

export const fetchCurrencies = () => async (dispatch) => {
  dispatch(requestCurrencies());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => dispatch(saveCurrencies(data)))
    .catch((error) => console.log(error));
};
