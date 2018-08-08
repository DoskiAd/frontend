import React from 'react';

const maxMessageLength = 200

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
      {props.message.length < maxMessageLength
        ? props.message
        : props.message.slice(0, maxMessageLength - 1)}
    </div>
  );
}

export default Alert;
