import React from 'react';
import PropTypes from 'prop-types';

const BookingsCard = (props) => {
  const {
    item: {
      name, carModel, carName, imageUrl, userName, price,
    },
  } = props;
  return (
    <>
      <div>{name}</div>
      <div>{carModel}</div>
      <div><img src={imageUrl} alt={carName} /></div>
      <div>{carName}</div>
      <div>{userName}</div>
      <div>{price}</div>
    </>
  );
};

BookingsCard.propTypes = {
  item: PropTypes.shape({
    price: PropTypes.number,
    name: PropTypes.string,
    carName: PropTypes.string,
    carModel: PropTypes.string,
    userName: PropTypes.string,
    imageUrl: PropTypes.string,
  }),
};

BookingsCard.defaultProps = {
  item: [],
};

export default BookingsCard;
