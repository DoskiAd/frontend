import React from 'react';

const PaginationBtn = (props) => {
  return(
    <li className={"page-item" + (props.disabled? " disabled": "")} >
      <a href="#" className="page-link  border-secondary"
        onClick={(event) => {
          event.preventDefault();
          if(!props.disabled){ props.callback(); }
        }}>
        {props.value}
      </a>
    </li>
  );
}

export default PaginationBtn;
