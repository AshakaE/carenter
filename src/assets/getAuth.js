import axios from 'axios';

async function login({ name, password }) {
  const response = await axios.post(`https://car-rentapi.herokuapp.com/login?name=${name}&password=${password}`);
  return response;
}

async function register({ name, password, cpassword }) {
  const response = await axios.post(
    `https://car-rentapi.herokuapp.com/signup?name=${name}&password=${password}&password_confirmation=${cpassword}`,
  );
  return response;
}

// const auth = localStorage.getItem('auth');
// const uid = localStorage.getItem('uid');
async function bookCar({
  name, date, carId, price, createdBy, duration,
}) {
  // const auth = localStorage.getItem('auth');
  const uid = localStorage.getItem('uid');
  console.log(
    `https://car-rentapi.herokuapp.com/api/v1/bookings?name=${name.replace(/\s/g, '%20')}&date=${date}&carId=${carId}&price=${price}&createdBy=${createdBy}&duration=${duration}&userId=${JSON.parse(
      uid,
    )}`,
  );
  // const response = await axios.post(`https://car-rentapi.herokuapp.com/api/v1/bookings?name=${name}&date=${date}&carId=${carId}&price=${price}&createdBy=${createdBy}&duration=${duration}&userId=${JSON.parse(uid)}`, {
  //   headers: {
  //     Authorization: auth,
  //   },
  // });
  // return response;
}

const urlBookings = () => ('https://car-rentapi.herokuapp.com/api/v1/bookings');

const urlCars = () => ('https://car-rentapi.herokuapp.com/api/v1/cars');

const urlUser = () => ('https://car-rentapi.herokuapp.com/users');

export {
  login, register, urlCars, urlBookings, urlUser, bookCar,
};
