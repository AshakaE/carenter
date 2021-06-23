/* eslint no-unused-expressions: ["error", { "allowTernary": true }] */

import React from 'react';
import { useHistory } from 'react-router-dom';
import { login, register } from '../assets/getAuth';
import styles from '../assets/css/home.module.css';
import logpage from '../assets/css/login.module.css';
import carHome from '../assets/img/carHome.png';

const Login = () => {
  const history = useHistory();
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [cpassword, setCpassword] = React.useState('default');
  const [isMember, setIsMember] = React.useState(true);

  const isEmpty = !name || !password || !cpassword;

  const toggleMember = () => {
    setIsMember((prev) => {
      const isMember = !prev;
      isMember ? setCpassword('default') : setCpassword('');
      return isMember;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response;
    if (isMember) {
      response = await login({ name, password });
    } else {
      response = await register({ name, password, cpassword });
    }
    const token = response.data.auth_token;
    const { uid } = response.data;
    localStorage.setItem('user', name);
    localStorage.setItem('uid', uid);
    localStorage.setItem('auth', token);
    history.push('/bookings');
  };

  return (
    <>
      <div>
        <img src={carHome} alt="car" className={styles.img} />
        <div className={styles.container}>
          <div className={styles.items}>
            <h2 className={logpage.header}>
              {isMember ? 'Sign In' : 'Register'}
            </h2>
            <div className={logpage.inputDiv}>
              <label htmlFor="Name">
                <div className={logpage.inputDivText}>Name</div>
                <input
                  id="Name"
                  name="Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={logpage.input}
                  placeholder="your name"
                />
              </label>
            </div>
            <div className={logpage.inputDiv}>
              <label htmlFor="Password">
                <div className={logpage.inputDivText}>Password</div>
                <input
                  id="Password"
                  name="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={logpage.input}
                  placeholder="**********"
                />
              </label>
            </div>
            {!isMember && (
              <div className={logpage.inputDiv}>
                <label htmlFor="Password">
                  <div className={logpage.inputDivText}>Confirm password</div>
                  <input
                    id="cpassword"
                    name="cpassword"
                    type="password"
                    value={cpassword}
                    onChange={(e) => setCpassword(e.target.value)}
                    className={logpage.input}
                  />
                </label>
              </div>
            )}
            {isEmpty && (
              <p className={logpage.inputDivText}>Please fill the inputs</p>
            )}
            {!isEmpty && (
              <div className="mt-3">
                <input
                  type="submit"
                  value={isMember ? 'Log in' : 'Submit'}
                  onClick={handleSubmit}
                  className={logpage.btn}
                />
              </div>
            )}
            <p className={logpage.inputDivText}>
              {isMember ? 'need to register ? ' : 'already a member ? '}
              <button
                type="button"
                onClick={toggleMember}
                className={logpage.inputType}
              >
                Click here
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;