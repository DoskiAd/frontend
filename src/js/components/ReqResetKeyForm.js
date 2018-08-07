import React from 'react';

class ReqResetKeyForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      input: ""
    };
  }

  trackInput(event){
    event.preventDefault();
    this.setState({input: event.target.value});
  }

  acceptInput(event){
    event.preventDefault();
    this.props.askKey(this.state.input);
  }

  render(){
    return(
      <form onSubmit={(event) => this.acceptInput.bind(this)(event)} >
        <div className="form-group">
          <label>Адрес электронной почты:</label>
          <input type="email"
            className="form-control"
            value={this.state.input}
            required
            onChange={(event) => this.trackInput.bind(this)(event)} />
        </div>

        <div className="form-group">
            <button type="submit"
              className="btn btn-primary btn-block"> Выслать код для смены пароля </button>
        </div>
      </form>
    );
  }
}

export default ReqResetKeyForm;
