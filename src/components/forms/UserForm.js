import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userUpdate } from '../../assets/getAuth';
import form from '../../assets/css/login.module.css';

const UserForm = (props) => {
  const { edit } = props;
  const history = useHistory();
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [cpassword, setCpassword] = React.useState('');

  const handleSave = async () => {
    await userUpdate({ name, password, cpassword });
    history.push('/login-or-signup');
  };

  return (
    <>
      {edit && (
        <>
          <div>
            <div>
              <label htmlFor="Name">
                <div className={form.inputDivText}>Name</div>
                <input
                  id="Name"
                  name="Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={form.input}
                />
              </label>
            </div>
            <div>
              <label htmlFor="Password">
                <div className={form.inputDivText}>Password</div>
                <input
                  id="Password"
                  name="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={form.input}
                />
              </label>
            </div>
            <div>
              <label htmlFor="Password">
                <div className={form.inputDivText}>Confirm password</div>
                <input
                  id="cpassword"
                  name="cpassword"
                  type="password"
                  value={cpassword}
                  onChange={(e) => setCpassword(e.target.value)}
                  className={form.input}
                />
              </label>
            </div>
          </div>
          <button type="submit" id="btn" onClick={handleSave} className={form.btn}>
            Save
          </button>
        </>
      )}
    </>
  );
};

UserForm.propTypes = {
  edit: PropTypes.bool,
};

UserForm.defaultProps = {
  edit: false,
};

export default UserForm;
