import React from 'react';
import {connect} from 'react-redux';
import {fillItems} from '../middleware/thunks.js';

class LoaderFavorites extends React.Component{
  componentDidMount(){
    this.props.loadData();
  }

  render(){
    return null;
  }
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(fillItems())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoaderFavorites);
