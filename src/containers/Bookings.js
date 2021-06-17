import React, { useEffect } from 'react';
import { urlBookings } from '../assets/getAuth';

const Bookings = () => {
  const one = 1; //eslint-disable-line
  useEffect(() => {
    urlBookings().then((data) => {
      const resp = data;
      console.log(resp);
    });
  }, []);
  return (
    <>
      <div>Bookings</div>
    </>
  );
};

export default Bookings;
