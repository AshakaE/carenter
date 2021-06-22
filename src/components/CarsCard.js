import React from 'react';
import PropTypes from 'prop-types';
import BookingsForm from './forms/BookingsForm';

const CarsCard = (props) => {
  const [isMember, setIsMember] = React.useState(true);
  const {
    item: {
      id, name, model, year, imageUrl,
    },
  } = props;

  const toggleHidden = () => {
    setIsMember(!isMember);
  };

  const handleValues = (e) => {
    e.preventDefault();
    toggleHidden();
  };

  return (
    <>
      <div>{name}</div>
      <div>{model}</div>
      <div>{year}</div>
      <div>
        <img src={imageUrl} alt={name} />
      </div>
      <button type="button" onClick={handleValues}>
        place
      </button>
      {!isMember && <BookingsForm id={id} />}
    </>
  );
};

CarsCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
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
