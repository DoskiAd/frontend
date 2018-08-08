import React from 'react';
import {connect} from 'react-redux';
import FavCounterBadge from '../components/FavCounterBadge.js';

const FavCounter = (props) => {
  return(
    props.isLoggedIn &&
    <FavCounterBadge count={props.favoriteIds.length} />
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    favoriteIds: state.favoriteIds
  };
}

export default connect(mapStateToProps)(FavCounter);
