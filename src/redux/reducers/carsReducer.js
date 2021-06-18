import { SET_LOADING, GET_CARS } from '../actions';

const defaultState = {
  loading: false,
  cars: [],
};

const carsReducer = (state = defaultState, action) => {
  if (action.type === SET_LOADING) {
    return { ...state, loading: true };
  }
  if (action.type === GET_CARS) {
    return { ...state, loading: false, cars: action.payload };
  }
  return state;
};

export default carsReducer;
