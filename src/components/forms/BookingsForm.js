import React from 'react';
import PropTypes from 'prop-types';

const BookingsForm = (props) => {
  const { id } = props;
  const user = localStorage.getItem('user');
  // const id = localStorage.getItem('id');
  const [price, setPrice] = React.useState('');
  // const [id, setId] = React.useState('');

  const handlePrice = (e) => {
    const values = e.target.value;
    setPrice(values * 150);
  };
  return (
    <div>
      <input type="text" placeholder="name" />
      <input type="date" placeholder="date" />
      <input type="number" placeholder="car number" value={id} />
      <input type="number" placeholder="price" value={price} readOnly />
      <input type="text" placeholder="CreatedBy" value={user} disabled />
      <input type="number" placeholder="duration" onChange={handlePrice} name="duration" />
    </div>
  );
};

BookingsForm.propTypes = {
  id: PropTypes.number.isRequired,
};

export default BookingsForm;
