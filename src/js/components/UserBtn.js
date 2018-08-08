import React from 'react';
import Login from '../containers/Login.js';
import {Link} from 'react-router-dom';

const UserBtn = (props) => {
  return (
    <div className="widget-header dropdown">
				<a href="#" data-toggle="dropdown" data-offset="20,10">
					<div className="icontext">
						<div className="icon-wrap"><i className="text-warning icon-sm fa fa-user"></i></div>
						<div className="text-wrap text-dark">
							{
                !props.isLoggedIn &&
                <span>Войти <br />
                в аккаунт <i className="fa fa-caret-down"></i></span>
              }
              {
                props.isLoggedIn &&
                <span className="font-weight-bold">{props.email}</span>
              }
						</div>
					</div>
				</a>
        <div className="dropdown-menu">
          {
            !props.isLoggedIn &&
            <div>
              <Login mini="true" />
              <hr className="dropdown-divider" />
              <Link className="dropdown-item" to="/signup">Зарегистрироваться</Link>
              <Link className="dropdown-item" to="/confirmacc">Подтвердить аккаунт</Link>
              <Link className="dropdown-item" to="/restorepass">Забыли пароль?</Link>
            </div>
          }
          {
            props.isLoggedIn &&
            <div>
              <p className="dropdown-item">Добро пожаловать,
                <span className="font-weight-bold ml-1">{props.name}</span>
              </p>
              <hr className="dropdown-divider" />
              <div className="row justify-content-center">
                <button className="btn btn-primary" onClick={(event) => {
                    event.preventDefault();
                    props.logout();
                    props.clearFavorites();
                  }} > Выход </button>
              </div>
            </div>
          }
        </div>
			</div>
  );
}

export default UserBtn;
