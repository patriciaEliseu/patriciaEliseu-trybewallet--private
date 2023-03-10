// criar uma actiontype
export const ADD_ELEMENT = 'ADD_ELEMENT';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const EXCHANGE_ASK = 'EXCHANGE_ASK';

export function createActionSaveLogin(email) {
  return {
    type: ADD_ELEMENT,
    email,
  };
}

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

// export const deletaDespesa = () => ({
//   type: DELETE_EXPENSE, id,
// });

export const saveCurrencies = (currencies) => ({
  type: SAVE_CURRENCIES,
  currencies,
});

export const addExpense = (expenses) => ({
  type: ADD_EXPENSE,
  expenses,
});

export const exchangeAsk = (exchangeRates) => ({
  type: EXCHANGE_ASK,
  exchangeRates,
});

export const deletaDespesas = (id) => ({
  type: DELETE_EXPENSE,
  expenses: id,
});

export function fetchCurrencies() {
  return async (dispatch) => {
    const returnFetch = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await returnFetch.json();
    // Object.Keys transforma um obj em array para poder
    // usar o filter.
    const getCurrencies = Object.keys(data).filter((cent) => (cent !== 'USDT'));
    // console.log(getCurrencies);
    dispatch(saveCurrencies(getCurrencies));
  };
}
