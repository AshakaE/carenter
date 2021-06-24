import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCars } from '../redux/actions';
import CarsCard from '../components/CarsCard';
import gallery from '../assets/css/cars.module.css';

const Cars = (props) => {
  const { getCars, cars, loading } = props;

  useEffect(() => {
    getCars();
  }, []);

  if (loading) {
    return <div>hello</div>;
  }

  return (
    <div className={gallery.container}>
      <h1 className={gallery.header}>Gallery</h1>
      <div className={gallery.links}>
        <div className={gallery.link}>
          <Link to="/bookings">My Bookings</Link>
        </div>
        <div className={gallery.link}>
          <Link to="/user">My Account</Link>
        </div>
      </div>
      <div className={gallery.card}>
        <div className={gallery.cardInner}>
          {Object.values(cars).map((item) => (
            <CarsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({
  carState: { cars, loading },
}) => ({ loading, cars });

Cars.propTypes = {
  loading: PropTypes.bool.isRequired,
  cars: PropTypes.arrayOf(PropTypes.object),
  getCars: PropTypes.func.isRequired,
};

Cars.defaultProps = {
  cars: [],
};

export default connect(mapStateToProps, { getCars })(Cars);
