import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

const PrivatePageProtect = (props) => {
  if(props.isLoggedIn){
    return null;
  }else{
    return(
      <Redirect to="/" />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
}

export default connect(mapStateToProps)(PrivatePageProtect);
