import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {authentication} from '../middleware/thunks.js';
import {clearLoginMsgs} from '../actions/index.js';
import LoginForm from '../components/LoginForm.js';
import Alert from '../components/Alert.js';

class Login extends React.Component{
  componentWillUnmount(){
    this.props.clearMsgs();
  }

  render(){
    if(!this.props.mini && this.props.auth.isLoggedIn){
      return( <Redirect to="/" /> );
    }

    return(
      <div>
        {
          !!this.props.msgs.info &&
          <Alert type="info"
            message={this.props.msgs.info} />
        }
        {
          !!this.props.msgs.err &&
          <Alert type="error"
            message={this.props.msgs.err} />
        }
        <LoginForm mini={!!this.props.mini}
          submitCallback={this.props.login} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    msgs: state.loginMsgs
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, pass) => dispatch(authentication(email, pass)),
    clearMsgs: () => dispatch(clearLoginMsgs())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
