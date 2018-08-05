import React from 'react';
import {connect} from 'react-redux';
import LayoutSwitch from '../components/LayoutSwitch.js';
import {toggleGrid} from '../actions/index.js';

const LayoutControl = (props) => {
  return (
    <LayoutSwitch grid={props.grid}
      gridOn={() => {if(!props.grid){
        props.toggle();
      }}}
      listOn={() => {if(props.grid){
        props.toggle();
      }}} />
  );
}

const mapStateToProps = (state) => {
  return {
    grid: state.gridView
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: () => dispatch(toggleGrid())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutControl);
