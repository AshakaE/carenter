import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBookingParams } from '../../redux/actions';
import { bookCar } from '../../assets/getAuth';

const BookingsForm = (props) => {
  const { id, getBookingParams, params } = props; //eslint-disable-line
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
      duration: parseFloat(time),
    });
  };

  // React.useEffect(() => {
  //   const {
  //     name, date, carId, price, createdBy, duration,
  //   } = params;
  //   bookCar(name, date, carId, price, createdBy, duration);
  // });

  const handleSubmit = () => {
    const params = { ...state };
    bookCar(params);
    getBookingParams(params);
    // console.log(params);
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

const mapStateToProps = ({ bookingFormState: { params } }) => ({
  params,
});

BookingsForm.propTypes = {
  id: PropTypes.number.isRequired,
  getBookingParams: PropTypes.func.isRequired,
  // params: PropTypes.shape({
  //   name: PropTypes.string.isRequired,
  //   date: PropTypes.string.isRequired,
  //   carId: PropTypes.number.isRequired,
  //   price: PropTypes.number.isRequired,
  //   createdBy: PropTypes.string.isRequired,
  //   duration: PropTypes.number.isRequired,
  // }).isRequired,
};

export default connect(mapStateToProps, { getBookingParams })(BookingsForm);
