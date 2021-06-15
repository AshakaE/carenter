import React from 'react';

const Home = () => {
  const one = 1; //eslint-disable-line
  return (
    <>
      <div>
        <div>
          <h2 className="">Sign In</h2>
          <form className="" method="POST">
            <div>
              <label
                htmlFor="Name"
              >
                <div className="text-left">Name</div>
                <input
                  id="Name"
                  name="Name"
                  type="text"
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="Password"
              >
                <div className="text-left">Password</div>
                <input
                  id="Password"
                  name="Password"
                  type="text"
                />
              </label>
            </div>
            <div className="mt-3">
              <input
                type="submit"
                value="Sign in"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
