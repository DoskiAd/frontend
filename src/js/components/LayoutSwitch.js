import React from 'react';

const LayoutSwitch = (props) => {
  return(
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
      <label className={"btn btn-outline-secondary btn-link btn-sm" +
        (props.grid? "": " active")}
        onClick={props.listOn} >
        <input type="radio"
          name="options"
          id="radio-option-1"
          autoComplete="off"
          checked="" />
        <i className="fa fa-bars"></i>
      </label>
      <label className={"btn btn-outline-secondary btn-link btn-sm" +
        (props.grid? " active": "")}
        onClick={props.gridOn} >
        <input type="radio"
          name="options"
          id="radio-option-2"
          autoComplete="off" />
        <i className="fa fa-th"></i>
      </label>
    </div>
  );
}

export default LayoutSwitch;
