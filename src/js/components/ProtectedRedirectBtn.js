import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';

const ProtectedRedirectBtn = (props) => {

  $(() => {
    $('[data-toggle="tooltip"]').tooltip()
  });

  return(
    <span className="widget-header">
			<div className="icontext">
				<div className="icon-wrap">
          <i className={"text-warning icon-sm fa " + props.icon}></i>
        </div>
				<div className="text-wrap text-dark">
					{
            !props.isLoggedIn &&
            <button
              type="button"
              className="btn btn-link text-dark mx-0 my-0 px-0 py-0"
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Необходима регистрация"
              aria-describedby="logintip"
              style={{"textDecoration": "none"}}>
              {props.children}
            </button>
          }
          {
            props.isLoggedIn &&
            <Link to={props.redirect}
              className="btn btn-link text-dark mx-0 my-0 px-0 py-0"
              style={{"textDecoration": "none"}}>
              {props.children}
            </Link>
          }

				</div>
			</div>
		</span>
  );
}

export default ProtectedRedirectBtn;
