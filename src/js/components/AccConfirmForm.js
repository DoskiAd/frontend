import React from 'react';

class AccConfirmForm extends React.Component{
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
    this.props.reqConfirmation(this.state.input);
  }

  render(){
    return(
      <form onSubmit={(event) => this.acceptInput.bind(this)(event)} >
        <div className="form-group">
          <label>Код подтверждения:</label>
          <input type="text"
            className="form-control"
            value={this.state.input}
            required
            onChange={(event) => this.trackInput.bind(this)(event)} />
        </div>

        <div className="form-group">
            <button type="submit"
              className="btn btn-primary btn-block"> Подтвердить аккаунт </button>
        </div>
      </form>
    );
  }
}

export default AccConfirmForm;
