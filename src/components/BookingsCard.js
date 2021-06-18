import React from 'react';
import PropTypes from 'prop-types';

const BookingsCard = (props) => {
  const {
    item: {
      name, carModel,
    },
  } = props;
  return (
    <>
      <div>{name}</div>
      <div>{carModel}</div>
    </>
  );
};

BookingsCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.string),
};

BookingsCard.defaultProps = {
  item: [],
};

export default BookingsCard;
