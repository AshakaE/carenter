import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { urlCars } from '../redux/actions';
import { urlCars } from '../assets/getAuth';

const Cars = () => {
  // const { cars } = props;
  // console.log(cars);

  useEffect(() => {
    urlCars().then((data) => {
      const resp = data;
      console.log(resp);
    });
  }, []);

  return (
    <>
      <div>Cars</div>
    </>
  );
};

// const mapStateToProps = ({
//   carsState: { cars },
// }) => ({ cars });

// Cars.propTypes = {
//   cars: PropTypes.arrayOf(PropTypes.object),
// };

// Cars.defaultProps = {
//   cars: [],
// };

// export default connect(mapStateToProps, { getCars })(Cars);
export default Cars;
