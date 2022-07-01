// criar uma actiontype
export const ADD_ELEMENT = 'ADD_ELEMENT';

export function createActionSaveLogin(email) {
  return {
    type: ADD_ELEMENT,
    email,
  };
}
