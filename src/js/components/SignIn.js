import React from 'react';

const SignIn = (props) => {
  return (
    <div className="widget-header dropdown">
				<a href="#" data-toggle="dropdown" data-offset="20,10">
					<div className="icontext">
						<div className="icon-wrap"><i className="text-warning icon-sm fa fa-user"></i></div>
						<div className="text-wrap text-dark">
							Войти <br />
              в аккаунт <i className="fa fa-caret-down"></i>
						</div>
					</div>
				</a>
				<div className="dropdown-menu">
					<form className="px-4 py-3">
						<div className="form-group">
						  <label>Адрес Email</label>
						  <input type="email" className="form-control" placeholder="email@example.com" />
						</div>
						<div className="form-group">
						  <label>Пароль</label>
						  <input type="password" className="form-control" placeholder="Password" />
						</div>
						<button type="submit" className="btn btn-primary">Войти</button>
						</form>
						<hr className="dropdown-divider" />
						<a className="dropdown-item" href="#">Зарегистрироваться</a>
						<a className="dropdown-item" href="#">Забыли пароль?</a>
				</div>
			</div>
  );
}

export default SignIn;
