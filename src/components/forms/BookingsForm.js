import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { bookCar } from '../../assets/getAuth';

const BookingsForm = (props) => {
  const history = useHistory();
  const { id } = props; //eslint-disable-line
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = { ...state };
    const response = await bookCar(params);
    const msg = response.message;
    history.push('/bookings');
    console.log(msg);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        name="name"
        onChange={handleChange}
      />
      {!isEmpty && (
        <input
          type="date"
          placeholder="date"
          name="date"
          onChange={handleChange}
        />
      )}
      <input
        type="number"
        placeholder="car number"
        value={id}
        name="carId"
        readOnly
      />
      <input
        type="number"
        placeholder="price"
        value={amount}
        readOnly
        name="price"
      />
      <input
        type="text"
        placeholder="CreatedBy"
        value={user}
        readOnly
        name="createdBy"
      />
      <input
        type="number"
        placeholder="duration"
        onChange={handlePrice}
        name="duration"
      />
      {isEmpty && <p>Please fill the inputs</p>}
      {!isEmpty && (
        <button type="submit" id="btn" onClick={handleSubmit}>
          Submit
        </button>
      )}
    </div>
  );
};

BookingsForm.propTypes = {
  id: PropTypes.number.isRequired,
};

export default BookingsForm;
