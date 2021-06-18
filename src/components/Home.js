import React from 'react';
import { useHistory } from 'react-router-dom';
import { login, register } from '../assets/getAuth';

const Home = () => {
  const history = useHistory();
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [cpassword, setCpassword] = React.useState('default');
  const [isMember, setIsMember] = React.useState(true);

  const isEmpty = !name || !password || !cpassword;

  const toggleMember = () => {
    setIsMember((prev) => {
      const isMember = !prev;
      isMember ? setCpassword('default') : setCpassword(''); //eslint-disable-line
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
    if (response) {
      //
    } else {
      // show msg
    }
    const token = response.data.auth_token;
    localStorage.setItem('auth', token);
    history.push('/bookings');
  };

  return (
    <>
      <div>
        <div>
          <h2 className="">{isMember ? 'Sign In' : 'Register'}</h2>
          <form className="" method="POST">
            <div>
              <label htmlFor="Name">
                <div className="text-left">Name</div>
                <input
                  id="Name"
                  name="Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="Password">
                <div className="text-left">Password</div>
                <input
                  id="Password"
                  name="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            {!isMember && (
              <div>
                <label htmlFor="Password">
                  <div className="text-left">Confirm password</div>
                  <input
                    id="cpassword"
                    name="cpassword"
                    type="password"
                    value={cpassword}
                    onChange={(e) => setCpassword(e.target.value)}
                  />
                </label>
              </div>
            )}
            {isEmpty && <p>Please fill the inputs</p>}
            {!isEmpty && (
              <div className="mt-3">
                <input
                  type="submit"
                  value={isMember ? 'Log in' : 'Submit'}
                  onClick={handleSubmit}
                />
              </div>
            )}
            <p>
              {isMember ? 'need to register' : 'already a member'}
              <button type="button" onClick={toggleMember}>
                Click here
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
