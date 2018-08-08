import React from 'react';
import {connect} from 'react-redux';
import {setItemsByCategory} from '../middleware/thunks.js';

class Loader extends React.Component{
  componentDidMount(){
    this.props.loadData(this.props.category);
  }

  componentDidUpdate(){
    this.props.loadData(this.props.category);
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
    loadData: (category) => dispatch(setItemsByCategory(category))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Loader);
