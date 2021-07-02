import carsReducer from '../../redux/reducers/carsReducer';
import { SET_LOADING, GET_CARS } from '../../redux/actions';

const state = {};

describe('userReducer', () => {
  it('returns state with a boolean and an array', () => {
    const newState = { loading: true, cars: [] };
    carsReducer({ ...newState }, SET_LOADING);
    expect(state).toEqual({});
  });

  it('Does not mutate the original state', () => {
    const newState = { loading: true, cars: [] };
    carsReducer({ ...newState }, GET_CARS);
    expect(state).not.toEqual({
      loading: true,
      cars: [],
    });
  });
});
