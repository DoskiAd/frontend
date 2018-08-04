import React from 'react';
import {connect} from 'react-redux';
import NavbarList from '../components/NavbarList.js';
import {fillItems} from '../middleware/thunks.js';

const NavbarCategories = (props) => {
  return <NavbarList categoriesList={props.categoriesList}
    callback={(id) => {
      props.setFilter(id);
      props.fillItems();
    }} />
}

const mapStateToProps = (state) => {
  return {categoriesList: state.categories};
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (id) => dispatch({
      type: "SET_CATEGORY_FILTER",
      categoryId: id
    }),
    fillItems: () => dispatch(fillItems())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarCategories);
