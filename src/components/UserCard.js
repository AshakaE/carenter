import React from 'react';
import PropTypes from 'prop-types';

const UserCard = (props) => {
  const {
    user,
  } = props;
  return (
    <>
      <div>{user}</div>
    </>
  );
};

UserCard.propTypes = {
  user: PropTypes.string, // eslint-disable-line
};

UserCard.defaultProps = {
  user: [],
};

export default UserCard;
