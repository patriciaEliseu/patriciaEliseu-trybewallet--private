// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SAVE_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  totalGastos: 0,
  currencies: [],
};

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_CURRENCIES:
    return {
      ...state,
      currencies: [...action.currencies],
    };
  default:
    return state;
  }
}
