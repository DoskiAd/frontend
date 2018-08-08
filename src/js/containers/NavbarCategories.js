import React from 'react';
import {connect} from 'react-redux';
import NavbarList from '../components/NavbarList.js';
import {setItemsByCategory} from '../middleware/thunks.js';

const NavbarCategories = (props) => {
  return <NavbarList categoriesList={props.categoriesList} />
}

const mapStateToProps = (state) => {
  return {categoriesList: state.categories};
}

export default connect(mapStateToProps)(NavbarCategories);
