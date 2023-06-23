// userActions.js
export const setUserdata = (userDatas) => {
    return {
      type: 'SET_USER_DATA',
      payload: userDatas,
    };
  };

  export const setReservationId = (reservationId) => {
    return {
      type: 'SET_RESERVATION_DATA',
      payload: reservationId,
    };
  };
  
  export const clearUserdata = () => {
    return {
      type: 'CLEAR_USER_DATA',
    };
  };
  