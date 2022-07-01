// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADD_ELEMENT } from '../actions';

const INITIAL_STATE = { email: '' };

function user(state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
  case ADD_ELEMENT:
    return {
      ...state,
      email: action.email,
    };

  default:
    return state;
  }
}

export default (user);
