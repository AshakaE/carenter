import axios from 'axios';

const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
};
async function login({ name, password }) {
  const response = await axios.post(`https://car-rentapi.herokuapp.com/login?name=${name}&password=${password}`);
  // 'https://car-rentapi.herokuapp.com/login?', { name, password },
  // .catch((error) => console.log(error));
  return response;
}
function register(name, password, cpassword) {
  return fetch(
    `https://carenter.herokuapp.com/signup?name=${name}&password=${password}}&password_confirmation=${cpassword}}`,
    requestOptions,
  ).then((response) => response.json());
}

export { login, register };
