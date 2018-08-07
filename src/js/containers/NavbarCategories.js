import React from 'react';
import {connect} from 'react-redux';
import NavbarList from '../components/NavbarList.js';
import {setItemsByCategory} from '../middleware/thunks.js';

const NavbarCategories = (props) => {
  return <NavbarList home={props.home}
    categoriesList={props.categoriesList}
    callback={(id) => {
      props.applyFilter(id);
    }} />
}

const mapStateToProps = (state) => {
  return {categoriesList: state.categories};
}

const mapDispatchToProps = (dispatch) => {
  return {
    applyFilter: (id) => dispatch(setItemsByCategory(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarCategories);
