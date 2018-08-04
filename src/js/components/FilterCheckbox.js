import React from 'react';

const FilterCheckbox = (props) => {
  return(
        <label className={"btn btn-outline-secondary btn-sm mx-1 my-1" +
            (props.checked? " active": "")}
          onClick={props.callback}>
          <input type="checkbox"
            autoComplete="off" />{props.name}
        </label>
  );
}

export default FilterCheckbox;
