/* eslint no-unused-expressions: ["error", { "allowTernary": true }] */

import React from 'react';
import { useHistory } from 'react-router-dom';
import { login, register } from '../assets/getAuth';
import styles from '../assets/css/home.module.css';
import logpage from '../assets/css/login.module.css';

const Login = () => {
  const history = useHistory(); //eslint-disable-line
  const [error, setError] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [fpassword, setFpassword] = React.useState('');
  const [cpassword, setCpassword] = React.useState('default');
  const [isMember, setIsMember] = React.useState(true);

  const isEmpty = !username || !fpassword || !cpassword;

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
      response = await login({ username, fpassword });
      if (response.uid) {
        const token = response.auth_token;
        const { uid } = response;
        localStorage.setItem('user', username);
        localStorage.setItem('uid', uid);
        localStorage.setItem('auth', token);
        history.push('/bookings');
      }
      if (response.message) {
        setError(response.message);
      }
    } else {
      response = await register({ username, fpassword, cpassword });
    }
    return response;
  };

  return (
    <>
      <div className={logpage.img}>
        <div className={styles.container}>
          <div className={styles.items}>
            {error && (<p className={logpage.error}>{error}</p>)}
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
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  value={fpassword}
                  onChange={(e) => setFpassword(e.target.value)}
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
