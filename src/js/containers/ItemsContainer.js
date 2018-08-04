import React from 'react';
import {connect} from 'react-redux';
import ItemList from '../components/ItemList.js';
import ItemGrid from '../components/ItemGrid.js';

const ItemsContainer = (props) => {
  return props.grid?
    <ItemGrid items={props.items} />: <ItemList items={props.items} />
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    grid: state.gridView
  };
}

export default connect(mapStateToProps)(ItemsContainer);
