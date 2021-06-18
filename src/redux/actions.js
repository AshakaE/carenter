import axios from 'axios';
import { urlBookings, urlCars } from '../assets/getAuth';

export const GET_CARS = 'GET_CARS';
export const GET_BOOKINGS = 'GET_BOOKINGS';

export const SET_LOADING = 'SET_LOADING';

export const setLoading = () => ({ type: SET_LOADING });

// export const getCars = (d1) => async function fn(dispatch) {
//   dispatch(setLoading());
//   const response = await fetch(urlCars(d1));
//   const data = await response.json();
//   const values = data.hits;
//   dispatch({ type: GET_RECIPE, payload: values });
// };
export const getBookings = () => async function fn(dispatch) {
  const auth = localStorage.getItem('auth');
  // console.log('hello');
  dispatch(setLoading());
  const response = await axios.get(urlBookings(),
    {
      headers: {
        Authorization: auth,
      },
    });
  const data = await response.data;
  // console.log(data);
  dispatch({ type: GET_BOOKINGS, payload: data });
};

export const getCars = () => async function fn(dispatch) {
  const auth = localStorage.getItem('auth');
  // console.log(auth);
  dispatch(setLoading());
  const response = await axios.get(urlCars(),
    {
      headers: {
        Authorization: auth,
      },
    });
  const data = await response.data;
  // console.log(data);
  dispatch({ type: GET_CARS, payload: data });
};
