import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { bookCar, updateBooking } from '../../assets/getAuth';
import styles from '../../assets/css/forms.module.css';
import gallery from '../../assets/css/cars.module.css';

const BookingsForm = (props) => {
  const history = useHistory();
  const {
    id, update, carId,
  } = props;
  const user = localStorage.getItem('user');
  const [amount, setAmount] = React.useState('');
  const [time, setTime] = React.useState('');
  const [state, setState] = React.useState({
    name: '',
    date: '',
    carId: id,
    price: amount,
    createdBy: user,
    duration: time,
  });

  const isEmpty = !time || !state.name;

  const handlePrice = (e) => {
    const values = e.target.value;
    setAmount(values * 150);
    setTime(values);
  };

  const handleChange = (e) => {
    const values = e.target.value;
    setState({
      ...state,
      [e.target.name]: values,
      price: amount,
      duration: time,
    });
  };

  const handleSubmit = async () => {
    const params = { ...state };
    let response;
    if (update) {
      response = await updateBooking(params, carId);
      history.push('/bookings');
    } else {
      response = await bookCar(params);
      history.push('/bookings');
    }
    const msg = response.message;
    return msg;
  };

  return (
    <div>
      <div className={styles.inputDiv}>
        <input
          type="text"
          placeholder="booking title"
          name="name"
          onChange={handleChange}
          className={styles.inputBox}
        />
        <input
          type="text"
          placeholder="CreatedBy"
          value={user}
          readOnly
          name="createdBy"
          className={styles.inputBox}
          disabled
        />
      </div>
      <div className={styles.inputDiv}>
        <input
          type="number"
          placeholder="duration"
          onChange={handlePrice}
          name="duration"
          className={styles.inputBox}
        />
        <input
          type="number"
          placeholder="price"
          value={amount}
          readOnly
          name="price"
          disabled
          className={styles.inputBox}
        />
      </div>
      <div className={styles.inputDiv}>
        {!isEmpty && (
          <input
            type="date"
            placeholder="date"
            name="date"
            onChange={handleChange}
            className={styles.inputBox}
          />
        )}
        <input
          type="number"
          placeholder="car number"
          value={id}
          name="carId"
          readOnly
          disabled
          className={styles.inputBox}
        />
      </div>
      {isEmpty && <p className={styles.info}>Please fill the inputs</p>}
      {(() => {
        if (update && !isEmpty) {
          return (
            <button type="submit" id="btn" onClick={handleSubmit}>
              Save
            </button>
          );
        }
        if (!isEmpty) {
          return (
            <button type="submit" id="btn" onClick={handleSubmit} className={gallery.btn}>
              Submit
            </button>
          );
        }
        return true;
      })()}
    </div>
  );
};

BookingsForm.propTypes = {
  id: PropTypes.number.isRequired,
  carId: PropTypes.number,
  update: PropTypes.bool,
};

BookingsForm.defaultProps = {
  update: false,
  carId: 0,
};

export default BookingsForm;
