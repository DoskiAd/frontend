import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../actions/index.js';
import UserBtn from '../components/UserBtn.js';

const UserBtnContainer = (props) => {
  return(
    <UserBtn {...props} />
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    name: state.auth.name,
    email: state.auth.email
  };
}

const mapDispatchToProps = (dispatch) => {
  return {logout: () => dispatch(logout())};
}

export default connect(mapStateToProps, mapDispatchToProps)(UserBtnContainer);
