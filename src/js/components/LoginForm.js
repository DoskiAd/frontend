import React from 'react';
import {Link} from 'react-router-dom';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      emailInput: "",
      passwordInput: ""
    }
  }

  trackInput(event, field){
    event.preventDefault();
    let newState = {};
    newState[field] = event.target.value;
    this.setState(newState);
  }

  acceptInput(event){
    event.preventDefault();
    this.props.submitCallback(
      this.state.emailInput,
      this.state.passwordInput
    );
  }

  render(){
    return(
      <form className={!!this.props.mini? "px-4 py-3": ""} onSubmit={(event) =>
         this.acceptInput.bind(this)(event)} >
        <div className="form-group">
          {
            !this.props.mini &&
            <Link className="float-right" to="/confirmacc">Подтвердить аккаунт</Link>
          }
          <label>Адрес электронной почты:</label>
            <input className="form-control"
              value={this.state.emailInput}
              type="email"
              onChange={(event) =>
                this.trackInput.bind(this)(event, "emailInput")} />
        </div>
        <div className="form-group">
          {
            !this.props.mini &&
            <Link className="float-right" to="/restorepass">Забыли пароль?</Link>
          }
          <label>Пароль:</label>
            <input className="form-control"
              value={this.state.passwordInput}
              type="password"
              onChange={(event) =>
                this.trackInput.bind(this)(event, "passwordInput")} />
        </div>
        <div className="form-group">
            <button type="submit"
              className={"btn btn-primary" +
                (!this.props.mini? " btn-block": "")} >
              Войти
            </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
