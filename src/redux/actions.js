import { urlBookings, urlCars, urlUser } from '../assets/getAuth';

export const GET_CARS = 'GET_CARS';
export const GET_USER = 'GET_USER';
export const GET_BOOKINGS = 'GET_BOOKINGS';

export const SET_LOADING = 'SET_LOADING';

export const setLoading = () => ({ type: SET_LOADING });

export const getBookings = () => async function fn(dispatch) {
  const auth = localStorage.getItem('auth');
  dispatch(setLoading());
  const response = await fetch(urlBookings(),
    {
      headers: {
        Authorization: auth,
      },
    }).then((response) => response.json());
  dispatch({ type: GET_BOOKINGS, payload: response });
};

export const getCars = () => async function fn(dispatch) {
  const auth = localStorage.getItem('auth');
  dispatch(setLoading());
  const response = await fetch(urlCars(),
    {
      headers: {
        Authorization: auth,
      },
    }).then((response) => response.json());
  dispatch({ type: GET_CARS, payload: response });
};

export const getUser = () => async function fn(dispatch) {
  const auth = localStorage.getItem('auth');
  dispatch(setLoading());
  const response = await fetch(urlUser(), {
    headers: {
      Authorization: auth,
    },
  }).then((response) => response.json());
  console.log(response);
  dispatch({ type: GET_USER, payload: response });
};
