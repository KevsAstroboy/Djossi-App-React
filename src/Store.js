import { createStore } from 'redux';

// Définition de l'état initial du store
const initialState = {
  userDatas: null,
  reservationId:''
};

// Définition du reducer pour gérer les actions
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        userDatas: action.payload,
      };
      case 'SET_RESERVATION_DATA':
      return {
        ...state,
        reservationId: action.payload,
      };
    case 'CLEAR_USER_DATA':
      return {
        ...state,
        userDatas: null,
      };
    default:
      return state;
  }
};

// Création du store
const store = createStore(reducer);

export default store;
