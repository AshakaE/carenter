import React from 'react';
import PropTypes from 'prop-types';

const CarsCard = (props) => {
  const {
    item: {
      name, model, year, imageUrl,
    },
  } = props;
  return (
    <>
      <div>{name}</div>
      <div>{model}</div>
      <div>{year}</div>
      <div>
        <img src={imageUrl} alt={name} />
      </div>
    </>
  );
};

CarsCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.number,
    imageUrl: PropTypes.string,
  }),
};

CarsCard.defaultProps = {
  item: [],
};

export default CarsCard;
