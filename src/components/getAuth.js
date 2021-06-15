const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
};
function login(name, password) {
  return fetch(
    `https://carenter.herokuapp.com/login?name=${name}&password=${password}}`, requestOptions,
  ).then((response) => response.json());
}
function register(name, password, cpassword) {
  return fetch(
    `https://carenter.herokuapp.com/signup?name=${name}&password=${password}}&password_confirmation=${cpassword}}`,
    requestOptions,
  ).then((response) => response.json());
}

export { login, register };
