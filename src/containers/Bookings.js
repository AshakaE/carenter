import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBookings } from '../redux/actions';
import Loading from '../components/Loading';
import BookingsCard from '../components/BookingsCard';
import tables from '../assets/css/bookings.module.css';

const Bookings = (props) => {
  const { getBookings, bookings, loading } = props;

  useEffect(() => {
    getBookings();
  }, []);

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <>
      <h1 className={tables.cardText}>Bookings</h1>
      <div className={tables.links}>
        <div className={tables.link}>
          <Link to="/cars">Cars gallery</Link>
        </div>
        <div className={tables.link}>
          <Link to="/user">My Account</Link>
        </div>
      </div>
      <div className={tables.container}>
        <div className={tables.gridHead}>
          <div>Title</div>
          <div>Car make</div>
          <div>Car model</div>
          <div>Created by</div>
          <div>Price ($)</div>
          <div>Date</div>
          <div>Actions</div>
        </div>
        {Object.values(bookings).map((item) => (
          <BookingsCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = ({
  bookingState: { bookings, loading },
}) => ({ loading, bookings });

Bookings.propTypes = {
  loading: PropTypes.bool.isRequired,
  bookings: PropTypes.arrayOf(PropTypes.object),
  getBookings: PropTypes.func.isRequired,
};

Bookings.defaultProps = {
  bookings: [],
};

export default connect(mapStateToProps, { getBookings })(Bookings);
