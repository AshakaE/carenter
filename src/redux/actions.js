import axios from 'axios';
import { urlCars } from '../components/getAuth';

export const GET_CARS = 'GET_CARS';

export const SET_LOADING = 'SET_LOADING';

export const setLoading = () => ({ type: SET_LOADING });

// export const getCars = (d1) => async function fn(dispatch) {
//   dispatch(setLoading());
//   const response = await fetch(urlCars(d1));
//   const data = await response.json();
//   const values = data.hits;
//   dispatch({ type: GET_RECIPE, payload: values });
// };
const auth = localStorage.getItem('auth');
export const getCars = () => async function fn(dispatch) {
  console.log(auth);
  dispatch(setLoading());
  const response = await axios.get(urlCars(),
    {
      headers: {
        Authorization: `${auth}`,
      },
    });
  const data = await response.json();
  const { cars } = data;
  dispatch({ type: GET_CARS, payload: cars });
};
