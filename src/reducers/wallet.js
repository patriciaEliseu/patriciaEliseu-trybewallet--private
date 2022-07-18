// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSE, SAVE_CURRENCIES, EXCHANGE_ASK } from '../actions';

const INITIAL_STATE = {
  totalGastos: 0,
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses,
        action.expenses],
    };
  case EXCHANGE_ASK:
    return {
      ...state,
      exchangeRates: action.exchangeRates,
    };
  default:
    return state;
  }
};

export default wallet;
