import React from 'react';

class PassChangeForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      keyInput: "",
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
    this.props.changePass(
      this.state.keyInput,
      this.state.passwordInput,
      this.state.confirmInput
    );
  }

  render(){
    return(
      <form onSubmit={(event) => this.acceptInput.bind(this)(event)} >
        <div className="form-group">
          <label>Введите код:</label>
          <input type="text"
            className="form-control"
            value={this.state.keyInput}
            required
            onChange={(event) =>
              this.trackInput.bind(this)(event, "keyInput")} />
        </div>

        <div className="form-group">
          <label>Новый пароль:</label>
            <input className="form-control"
              type="password"
              required
              value={this.state.passwordInput}
              onChange={(event) =>
                this.trackInput.bind(this)(event, "passwordInput")} />
        </div>

        <div className="form-group">
          <label>Подтвердите пароль:</label>
            <input className="form-control"
              type="password"
              required
              value={this.state.confirmInput}
              onChange={(event) =>
                this.trackInput.bind(this)(event, "confirmInput")} />
        </div>

        <div className="form-group">
            <button type="submit"
              className="btn btn-primary btn-block"> Сменить пароль  </button>
        </div>
      </form>
    );
  }
}

export default PassChangeForm;
