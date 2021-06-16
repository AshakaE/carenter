import React from 'react';
import { login, register } from './getAuth'; //eslint-disable-line

const Home = () => {
  const one = 1; //eslint-disable-line
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [cpassword, setCpassword] = React.useState('default');
  const [isMember, setIsMember] = React.useState(true); //eslint-disable-line

  const isEmpty = !name || !password || !cpassword;

  const toggleMember = () => {
    setIsMember((prev) => {
      const isMember = !prev;
      isMember ? setCpassword('default') : setCpassword(''); //eslint-disable-line
      return isMember;
    });
  }; //eslint-disable-line

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (isMember) {
    const response = await login({ name, password });
    // } else {
    //   const response = await login({ name, password, cpassword });
    // }
    if (response) {
      console.log(response);
    } else {
      // show msg
    }
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
            {isEmpty && (
              <p>Please fill the inputs</p>
            )}
            {!isEmpty && (
              <div className="mt-3">
                <input type="submit" value={isMember ? 'Log in' : 'Submit'} onClick={handleSubmit} />
              </div>
            )}
            <p>
              {isMember ? 'need to register' : 'already a member'}
              <button type="button" onClick={toggleMember}>Click here</button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
