import { SET_LOADING, GET_USER } from '../actions';

const defaultState = {
  loading: false,
  user: '',
};

const userReducer = (state = defaultState, action) => {
  if (action.type === SET_LOADING) {
    return { ...state, loading: true };
  }
  if (action.type === GET_USER) {
    return { ...state, loading: false, user: action.payload };
  }
  return state;
};

export default userReducer;
