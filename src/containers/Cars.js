import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCars } from '../redux/actions';
import CarsCard from '../components/CarsCard';
// import BookingsForm from '../components/forms/BookingsForm';

const Cars = (props) => {
  const { getCars, cars, loading } = props;

  useEffect(() => {
    getCars();
  }, []);

  if (loading) {
    return <div>hello</div>;
  }

  return (
    <div>
      {/* <BookingsForm /> */}
      {Object.values(cars).map((item) => (
        <CarsCard key={item.id} item={item} />
      ))}
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
