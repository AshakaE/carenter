async function login({ username, fpassword }) {
  const response = await fetch('https://car-rentapi.herokuapp.com/login?', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      name: username,
      password: fpassword,
    }),
  }).then((response) => response.json());
  return response;
}

async function register({ username, fpassword, cpassword }) {
  const response = await fetch('https://car-rentapi.herokuapp.com/signup?', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      name: username,
      password: fpassword,
      password_confirmation: cpassword,
    }),
  }).then((response) => response.json());
  return response;
}

async function userUpdate({ username, fpassword, cpassword }) {
  const auth = localStorage.getItem('auth');
  const uid = localStorage.getItem('uid');
  const response = await fetch(
    `https://car-rentapi.herokuapp.com/users/${uid}?`,
    {
      method: 'PUT',
      headers: {
        Authorization: auth,
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        name: username,
        password: fpassword,
        password_confirmation: cpassword,
      }),
    },
  ).then((response) => response.json());
  return response;
}

async function userDelete() {
  const auth = localStorage.getItem('auth');
  const uid = localStorage.getItem('uid');
  const response = await fetch(
    `https://car-rentapi.herokuapp.com/users/${uid}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: auth,
        'Content-Type': 'application/json;charset=utf-8',
      },
    },
  ).then((response) => response.json());
  return response;
}

async function bookCar({
  name, date, carId, price, createdBy, duration,
}) {
  const auth = localStorage.getItem('auth');
  const uid = localStorage.getItem('uid');
  const response = await fetch(
    `https://car-rentapi.herokuapp.com/api/v1/bookings?name=${name.replace(/\s/g, '%20')}&date=${date}&price=${price}&createdBy=${createdBy}&duration=${duration}&carId=${carId}&userId=${uid}`,
    {
      method: 'POST',
      headers: {
        Authorization: auth,
        'Content-Type': 'application/json;charset=utf-8',
      },
    },
  ).then((response) => response.json());
  return response;
}

async function updateBooking({
  name, date, carId, price, createdBy, duration,
}, id) {
  const auth = localStorage.getItem('auth');
  const uid = localStorage.getItem('uid');
  const response = await fetch(
    `https://car-rentapi.herokuapp.com/api/v1/bookings/${id}?name=${name.replace(/\s/g, '%20')}&date=${date}&price=${price}&createdBy=${createdBy}&duration=${duration}&carId=${carId}&userId=${uid}`,
    {
      method: 'PUT',
      headers: {
        Authorization: auth,
        'Content-Type': 'application/json;charset=utf-8',
      },
    },
  ).then((response) => response.json());
  return response;
}

async function urlDeleteBooking(id) {
  const auth = localStorage.getItem('auth');
  const response = await fetch(
    `https://car-rentapi.herokuapp.com/api/v1/bookings/${id}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: auth,
        'Content-Type': 'application/json;charset=utf-8',
      },
    },
  );
  return response;
}

const urlBookings = () => ('https://car-rentapi.herokuapp.com/api/v1/bookings');

const urlCars = () => ('https://car-rentapi.herokuapp.com/api/v1/cars');

const urlUser = () => ('https://car-rentapi.herokuapp.com/users');

export {
  login,
  register,
  urlCars,
  urlBookings,
  urlUser,
  bookCar,
  urlDeleteBooking,
  updateBooking,
  userUpdate,
  userDelete,
};
