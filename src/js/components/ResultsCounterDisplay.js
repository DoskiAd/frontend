import React from 'react';

const ResultsCounterDisplay = (props) => {
  return(
    <div className="py-0 my-0">
      <span>Количество объявлений: {props.counter}</span>
    </div>
  );
}

export default ResultsCounterDisplay;
