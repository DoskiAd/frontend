import React from 'react';
import {connect} from 'react-redux';
import ProtectedRedirectBtn from '../components/ProtectedRedirectBtn.js';

const ProtectedRedirectBtnContainer = (props) => {
  return(
    <ProtectedRedirectBtn {...props} />
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
}

export default connect(mapStateToProps)(ProtectedRedirectBtnContainer);
