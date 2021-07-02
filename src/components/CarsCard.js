import React from 'react';
import PropTypes from 'prop-types';
import BookingsForm from './forms/BookingsForm';
import gallery from '../assets/css/cars.module.css';

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
      <div className={gallery.cardI}>
        <div className={gallery.cardBox}>
          <div className={gallery.cardText}>
            <p>Name:&nbsp;</p>
            <p>{name}</p>
          </div>
          <div className={gallery.cardText}>
            <p>model:&nbsp;</p>
            <p>{model}</p>
          </div>
          <div className={gallery.cardText}>
            <p>year:&nbsp;</p>
            <p>{year}</p>
          </div>
          <div>
            <img src={imageUrl} alt={name} />
          </div>
          <button type="button" onClick={handleValues} className={gallery.btn}>
            {isMember ? 'Place Booking ' : 'Cancel booking'}
          </button>
          {!isMember && <BookingsForm id={id} />}
        </div>
      </div>
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
