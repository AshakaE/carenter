import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/css/home.module.css';
import carIndex from '../assets/img/carIndex.png';

const Root = () => {
  const one = 1; //eslint-disable-line

  return (
    <>
      <div>
        <img src={carIndex} alt="car" className={styles.img} />
        <div className={styles.container}>
          <div className={styles.items}>
            <div className={styles.header}>
              <h1>Welcome to Carenter</h1>
            </div>
            <div className={styles.btn}>
              <Link to="/login-or-signup">Book a ride now</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Root;
