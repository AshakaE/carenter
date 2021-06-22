import axios from 'axios';

async function login({ name, password }) {
  const response = await axios.post(`https://car-rentapi.herokuapp.com/login?name=${name}&password=${password}`);
  return response;
}
// async function login({ name, password }) {
//   const response = await axios.post(`https://http://localhost:4000/login?name=${name}&password=${password}`);
//   return response;
// }

async function register({ name, password, cpassword }) {
  const response = await axios.post(
    `https://car-rentapi.herokuapp.com/signup?name=${name}&password=${password}&password_confirmation=${cpassword}`,
  );
  return response;
}

async function bookCar({
  name, date, carId, price, createdBy, duration,
}) {
  const auth = localStorage.getItem('auth');
  const uid = localStorage.getItem('uid');
  console.log(typeof duration);
  console.log(typeof price);
  console.log(typeof carId);
  const response = await fetch(
    // `http://localhost:4000/api/v1/bookings?name=${name.replace(/\s/g, '%20')}&date=${date}&price=${price}&createdBy=${createdBy}&duration=${duration}&carId=${carId}&userId=${JSON.parse(uid)}`, {
    `https://car-rentapi.herokuapp.com/api/v1/bookings?name=${name.replace(
      /\s/g,
      '%20',
    )}&date=${date}&price=${price}&createdBy=${createdBy}&duration=${duration}&carId=${carId}&userId=${uid}`,
    {
      method: 'POST',
      headers: {
        Authorization: auth,
      },
    },
  ).then((r) => r.json());
  return response;
}

// const urlBookings = () => ('http://localhost:4000/api/v1/bookings');
const urlBookings = () => ('https://car-rentapi.herokuapp.com/api/v1/bookings');

// const urlCars = () => ('http://localhost:4000/api/v1/cars');
const urlCars = () => ('https://car-rentapi.herokuapp.com/api/v1/cars');

// const urlUser = () => ('http://localhost:4000/users');
const urlUser = () => ('https://car-rentapi.herokuapp.com/users');

export {
  login, register, urlCars, urlBookings, urlUser, bookCar,
};
