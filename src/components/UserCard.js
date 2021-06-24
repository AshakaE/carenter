import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserForm from './forms/UserForm';
import { userDelete } from '../assets/getAuth';
import styles from '../assets/css/user.module.css';
import form from '../assets/css/login.module.css';

const UserCard = (props) => {
  const [edit, SetEdit] = useState(false);
  const history = useHistory();
  const {
    user,
  } = props;

  const handleEdit = () => {
    SetEdit(!edit);
  };

  const handleDelete = async () => {
    await userDelete();
    history.push('/');
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.items}>
          <div className={form.header}>{user}</div>
          <UserForm edit={edit} />
          <button type="button" onClick={handleEdit} className={styles.btn}>
            Update login information
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className={styles.btnDel}
          >
            Delete account
          </button>
          <div className={styles.links}>
            <div className={styles.link}>
              <Link to="/cars">Cars gallery</Link>
            </div>
            <div className={styles.link}>
              <Link to="/bookings">My Bookings</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

UserCard.propTypes = {
  user: PropTypes.string,
};

UserCard.defaultProps = {
  user: [],
};

export default UserCard;
