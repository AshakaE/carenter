import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../redux/actions';
import UserCard from '../components/UserCard';
import carUser2 from '../assets/img/carUser2.png';
import styles from '../assets/css/user.module.css';

const User = (props) => {
  const { loading, user, getUser } = props;
  useEffect(() => {
    getUser();
  }, []);

  if (loading) {
    return <div>hello</div>;
  }

  return (
    <div>
      <div>
        <img src={carUser2} alt="car" className={styles.img} />
        <UserCard user={user} />
      </div>
    </div>
  );
};

const mapStateToProps = ({
  userState: { user, loading },
}) => ({ loading, user });

User.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.string,
  getUser: PropTypes.func.isRequired,
};

User.defaultProps = {
  user: '',
};

export default connect(mapStateToProps, { getUser })(User);
