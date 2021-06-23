import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserForm from './forms/UserForm';
import { userDelete } from '../assets/getAuth';

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
      <div>{user}</div>
      <UserForm edit={edit} />
      <button type="button" onClick={handleEdit}>
        Update login information
      </button>
      <button type="button" onClick={handleDelete}>Delete account</button>
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
