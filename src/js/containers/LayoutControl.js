import React from 'react';
import {connect} from 'react-redux';
import LayoutSwitch from '../components/LayoutSwitch.js';

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
    toggle: () => dispatch({type: "TOGGLE_GRID"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutControl);
