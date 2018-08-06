import React from 'react';

class SignupForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      nameInput: "",
      emailInput: "",
      passwordInput: "",
      confirmInput: ""
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
      this.state.nameInput,
      this.state.emailInput,
      this.state.passwordInput,
      this.state.confirmInput
    );
  }

  render(){
    return(
      <form onSubmit={(event) => this.acceptInput.bind(this)(event)} >
        <div className="form-group">
          <label>Имя:</label>
          <input type="text"
            className="form-control"
            placeholder=""
            onChange={(event) =>
              this.trackInput.bind(this)(event, "nameInput")} />
        </div>

        <div className="form-group">
          <label>Адрес электронной почты:</label>
          <input type="email"
            className="form-control"
            placeholder="example@email.com"
            onChange={(event) =>
              this.trackInput.bind(this)(event, "emailInput")} />
        </div>

        <div className="form-group">
          <label>Пароль:</label>
            <input className="form-control"
              type="password"
              onChange={(event) =>
                this.trackInput.bind(this)(event, "passwordInput")} />
        </div>

        <div className="form-group">
          <label>Подтвердите пароль:</label>
            <input className="form-control"
              type="password"
              onChange={(event) =>
                this.trackInput.bind(this)(event, "confirmInput")} />
        </div>

        <div className="form-group">
            <button type="submit"
              className="btn btn-primary btn-block"> Зарегистрироваться  </button>
        </div>
      </form>
    );
  }
}

export default SignupForm;
