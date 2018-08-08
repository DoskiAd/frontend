import React from 'react';
import {connect} from 'react-redux';
import ResultsCounterDisplay from '../components/ResultsCounterDisplay.js';

const ResultsCounter = (props) => {
  return(
    <ResultsCounterDisplay {...props} />
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.numOfResults
  };
}

export default connect(mapStateToProps)(ResultsCounter);
