import bookingsReducer from '../../redux/reducers/bookingsReducer';
import { SET_LOADING, GET_BOOKINGS } from '../../redux/actions';

const state = {};

describe('bookingsReducer', () => {
  it('returns state with a boolean and an array', () => {
    const newState = { loading: true, bookings: [] };
    bookingsReducer({ ...newState }, SET_LOADING);
    expect(state).toEqual({});
  });

  it('Does not mutate the original state', () => {
    const newState = { loading: true, bookings: [] };
    bookingsReducer({ ...newState }, GET_BOOKINGS);
    expect(state).not.toEqual({
      loading: true,
      bookings: [],
    });
  });
});
