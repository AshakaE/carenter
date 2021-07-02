import React from 'react';
import PropTypes from 'prop-types';
import { urlDeleteBooking } from '../assets/getAuth';
import BookingsForm from './forms/BookingsForm';
import tables from '../assets/css/bookings.module.css';

const BookingsCard = (props) => {
  const [isMember, setIsMember] = React.useState(true);
  const [update, setUpdate] = React.useState(false);
  const [msg, setMsg] = React.useState('');
  const {
    item: {
      id, name, carModel, carName, userName, price, carId, date,
    },
  } = props;

  const handleDelete = async () => {
    const response = await urlDeleteBooking(id);
    const msg = response.message;
    setMsg(msg);
  };

  const time = date.split('T')[0];

  const toggleHidden = () => {
    setIsMember(!isMember);
    setUpdate(!update);
  };

  return (
    <>
      <div className={tables.gridBox}>
        <div>{name}</div>
        <div>{carName}</div>
        <div>{carModel}</div>
        <div>{userName}</div>
        <div>{price}</div>
        <div>{time}</div>
        <div>
          <button type="button" onClick={toggleHidden} className={tables.btn}>
            {' '}
            Update booking
          </button>
          <button type="button" onClick={handleDelete} className={tables.btnDel}>
            Delete booking
          </button>
        </div>
      </div>
      <div className={tables.form}>
        <div>
          {!isMember && (
            <BookingsForm carId={id} id={carId} update={update} alert={alert} />
          )}
          {msg && <p>{msg}</p>}
        </div>
      </div>
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
    date: PropTypes.string,
    carModel: PropTypes.string,
    userName: PropTypes.string,
  }),
};

BookingsCard.defaultProps = {
  item: [],
};

export default BookingsCard;
