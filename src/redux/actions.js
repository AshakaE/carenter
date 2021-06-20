import axios from 'axios';
import { urlBookings, urlCars, urlUser } from '../assets/getAuth';

export const GET_CARS = 'GET_CARS';
export const GET_USER = 'GET_USER';
export const GET_BOOKINGS = 'GET_BOOKINGS';

export const SET_LOADING = 'SET_LOADING';

export const setLoading = () => ({ type: SET_LOADING });

export const getBookings = () => async function fn(dispatch) {
  const auth = localStorage.getItem('auth');
  dispatch(setLoading());
  const response = await axios.get(urlBookings(),
    {
      headers: {
        Authorization: auth,
      },
    });
  const data = await response.data;
  console.log(data);
  dispatch({ type: GET_BOOKINGS, payload: data });
};

export const getCars = () => async function fn(dispatch) {
  const auth = localStorage.getItem('auth');
  dispatch(setLoading());
  const response = await axios.get(urlCars(),
    {
      headers: {
        Authorization: auth,
      },
    });
  const data = await response.data;
  console.log(data);
  dispatch({ type: GET_CARS, payload: data });
};

export const getUser = () => async function fn(dispatch) {
  const auth = localStorage.getItem('auth');
  dispatch(setLoading());
  const response = await axios.get(urlUser(),
    {
      headers: {
        Authorization: auth,
      },
    });
  const data = await response.data;
  console.log(data);
  dispatch({ type: GET_USER, payload: data });
};
