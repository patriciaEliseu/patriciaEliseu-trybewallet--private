// criar uma actiontype
export const ADD_ELEMENT = 'ADD_ELEMENT';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';

export function createActionSaveLogin(email) {
  return {
    type: ADD_ELEMENT,
    email,
  };
}

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const saveCurrencies = (currencies) => ({
  type: SAVE_CURRENCIES,
  currencies,
});

export function fetchCurrencies() {
  return async (dispatch) => {
    const returnFetch = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await returnFetch.json();
    // Object.Keys transforma um obj em array para poder
    // usar o filter.
    const getCurrencies = Object.keys(data).filter((cent) => (cent !== 'USDT'));
    console.log(saveCurrencies);
    dispatch(saveCurrencies(getCurrencies));
  };
}
