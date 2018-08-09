import React from 'react';
import {connect} from 'react-redux';
import {setItemsByCategory} from '../middleware/thunks.js';

class LoaderSearch extends React.Component{
  componentDidMount(){
    this.props.loadSearchData();
  }

  componentDidUpdate(){
    this.props.loadSearchData();
  }

  render(){
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    searchOptions: state.searchOptions
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadSearchData: (category) => dispatch(setItemsByCategory("search"))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoaderSearch);
