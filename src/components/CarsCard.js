import React from 'react';
import PropTypes from 'prop-types';

const CarsCard = (props) => {
  const {
    item: { name, carModel },
  } = props;
  return (
    <>
      <div>{name}</div>
      <div>{carModel}</div>
    </>
  );
};

CarsCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.string),
};

CarsCard.defaultProps = {
  item: [],
};

export default CarsCard;
