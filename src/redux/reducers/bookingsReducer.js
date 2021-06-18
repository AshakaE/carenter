import { SET_LOADING, GET_BOOKINGS } from '../actions';

const defaultState = {
  loading: false,
  bookings: [],
};

const bookingsReducer = (state = defaultState, action) => {
  if (action.type === SET_LOADING) {
    return { ...state, loading: true };
  }
  if (action.type === GET_BOOKINGS) {
    return { ...state, loading: false, bookings: action.payload };
  }
  return state;
};

export default bookingsReducer;
