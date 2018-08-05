import React from 'react';
import {connect} from 'react-redux';
import FilterCheckbox from '../components/FilterCheckbox.js';
import {setItemsByCategory} from '../middleware/thunks.js';

const FiltersContainer = (props) => {
  return props.categories.map((category) => {
    return <FilterCheckbox key={category.id}
      name={category.name}
      checked={category.id === props.activeFilter}
      callback={() => {
        props.applyFilter(
          category.id === props.activeFilter? null: category.id
        );
      }} />
  });
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    activeFilter: state.categoryFilter
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    applyFilter: (id) => dispatch(setItemsByCategory(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltersContainer);
