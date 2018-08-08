import React from 'react';
import {connect} from 'react-redux';
import SearchForm from '../components/SearchForm.js';
import {setSearchOptions} from '../actions/index.js'

const Search = (props) => {
  return(
    <SearchForm {...props} />
  );
}

const mapStateToProps = (state) => {
  return {
    categoriesList: state.categories
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchOptions: (category, key, sortBy, order) =>
      dispatch(setSearchOptions(category, key, sortBy, order))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
