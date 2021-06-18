import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBookings } from '../redux/actions';
import BookingsCard from '../components/BookingsCard';

const Bookings = (props) => {
  const { getBookings, bookings, loading } = props;

  useEffect(() => {
    getBookings();
  }, []);

  if (loading) {
    return (
      <div>
        hello
      </div>
    );
  }

  return (
    <div>
      {Object.values(bookings).map((item) => (
        <BookingsCard key={item.id} item={item} />
      ))}
    </div>
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
