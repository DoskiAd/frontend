import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import SignupForm from '../components/SignupForm.js';
import Alert from '../components/Alert.js';
import {registration} from '../middleware/thunks.js';
import {clearRegStatus} from '../actions/index.js';

class Signup extends React.Component{

  componentWillUnmount(){
    this.props.clearStatus();
  }

  render(){
    return(
      <div>
        {
          this.props.regStatus.isDone &&
          <Redirect to="/confirmacc" />
        }
        {
          !!this.props.regStatus.error &&
          <Alert type="error"
            message={this.props.regStatus.error} />
        }
        <SignupForm submitCallback={this.props.regUser} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    regStatus: state.register
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    regUser: (name, email, pass, confirm) =>
      dispatch(registration(name, email, pass, confirm)),
    clearStatus: () => dispatch(clearRegStatus())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
