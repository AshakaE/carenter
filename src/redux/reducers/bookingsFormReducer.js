import { BOOKING } from '../actions';

const defaultState = {
  params: {
    name: '',
    date: '',
    carId: '',
    price: '',
    createdBy: '',
    duration: '',
  },
};

const bookingsFormReducer = (state = defaultState, action) => {
  if (action.type === BOOKING) {
    return { params: action.payload };
  }
  return state;
};

export default bookingsFormReducer;
