async function login({ name, password }) {
  const response = await fetch('https://car-rentapi.herokuapp.com/login?', {
    method: 'POST',
    body: {
      name,
      password,
    },
  }).then((r) => r.json());
  return response;
}

async function register({ name, password, cpassword }) {
  const response = await axios.post(
    `https://car-rentapi.herokuapp.com/signup?name=${name}&password=${password}&password_confirmation=${cpassword}`,
  );
  return response;
}

async function userUpdate({ name, password, cpassword }) {
  const auth = localStorage.getItem('auth');
  const uid = localStorage.getItem('uid');
  const response = await fetch(
    `https://car-rentapi.herokuapp.com/users/${uid}?name=${name}&password=${password}&password_confirmation=${cpassword}`,
    {
      method: 'PUT',
      headers: {
        Authorization: auth,
      },
    },
  ).then((r) => r.json());
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
      },
    },
  ).then((r) => r.json());
  return response;
}

async function bookCar({
  name, date, carId, price, createdBy, duration,
}) {
  const auth = localStorage.getItem('auth');
  const uid = localStorage.getItem('uid');
  const response = await fetch(
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
      },
    },
  ).then((r) => r.json());
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
      },
    },
  ).then((r) => r.json());
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
