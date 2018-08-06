import React from 'react';

const Alert = (props) => {
  let alertType;
  if(props.type === "error"){
    alertType = "alert-danger";
  }
  if(props.type === "info"){
    alertType = "alert-info";
  }
  return(
    <div className={"alert " + alertType}
      role="alert"
      align="center">
      {props.message}
    </div>
  );
}

export default Alert;
