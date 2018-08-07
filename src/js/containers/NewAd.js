import React from 'react';
import {connect} from 'react-redux';
import {postAd} from '../middleware/thunks.js';
import {Redirect} from 'react-router-dom';
import NewAdForm from '../components/NewAdForm.js';

const NewAd = (props) => {
  if(!props.isLoggedIn){
    return <Redirect to="/" />
  }
  return(
    <NewAdForm {...props} />
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    isLoggedIn: state.auth.isLoggedIn
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitCallback: (title, price, desc, loc, cat, phone, email, photos) =>
      dispatch(postAd(title, price, desc, loc, cat, phone, email, photos))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewAd);
