import React from 'react';
import PropTypes from 'prop-types';
import { urlDeleteBooking } from '../assets/getAuth';

const BookingsCard = (props) => {
  const {
    item: {
      id, name, carModel, carName, imageUrl, userName, price,
    },
  } = props;

  const handleDelete = async () => {
    const response = await urlDeleteBooking(id);
    console.log(response);
  };

  return (
    <>
      <div>{name}</div>
      <div>{carModel}</div>
      <div>
        <img src={imageUrl} alt={carName} />
      </div>
      <div>{carName}</div>
      <div>{userName}</div>
      <div>{price}</div>
      <button type="button" onClick={handleDelete}>
        Delete booking
      </button>
    </>
  );
};

BookingsCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
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
