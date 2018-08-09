import React from 'react';
import {connect} from 'react-redux';
import ProtectedLinkBtn from '../components/ProtectedLinkBtn.js';

const ProtectedLinkBtnContainer = (props) => {
  return(
    <ProtectedLinkBtn {...props} />
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
}

export default connect(mapStateToProps)(ProtectedLinkBtnContainer);
