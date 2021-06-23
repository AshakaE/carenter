import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../redux/actions';
import UserCard from '../components/UserCard';

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
      <UserCard user={user} />
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
