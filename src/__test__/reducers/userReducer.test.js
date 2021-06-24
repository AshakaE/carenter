import userReducer from '../../redux/reducers/userReducer';
import { SET_LOADING, GET_USER } from '../../redux/actions';

const state = {};

describe('userReducer', () => {
  it('returns state with a boolean and an string', () => {
    const newState = { loading: true, user: '' };
    userReducer({ ...newState }, SET_LOADING);
    expect(state).toEqual({});
  });

  it('Does not mutate the original state', () => {
    const newState = { loading: true, user: '' };
    userReducer({ ...newState }, GET_USER);
    expect(state).not.toEqual({
      loading: true,
      user: '',
    });
  });
});
