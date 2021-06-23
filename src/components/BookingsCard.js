import React from 'react';
import PropTypes from 'prop-types';
import { urlDeleteBooking } from '../assets/getAuth';
import BookingsForm from './forms/BookingsForm';

const BookingsCard = (props) => {
  const [isMember, setIsMember] = React.useState(true);
  const [update, setUpdate] = React.useState(false);
  const [msg, setMsg] = React.useState('');
  const {
    item: {
      id, name, carModel, carName, imageUrl, userName, price, carId,
    },
  } = props;

  const handleDelete = async () => {
    const response = await urlDeleteBooking(id);
    const msg = response.message;
    setMsg(msg);
  };

  const toggleHidden = () => {
    setIsMember(!isMember);
    setUpdate(!update);
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
      <button type="button" onClick={toggleHidden}> Update booking</button>
      {!isMember && <BookingsForm carId={id} id={carId} update={update} alert={alert} />}
      {msg && (
        <div>{msg}</div>
      )}
    </>
  );
};

BookingsCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    carId: PropTypes.number,
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
