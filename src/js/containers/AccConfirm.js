import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import AccConfirmForm from '../components/AccConfirmForm.js';
import Alert from '../components/Alert.js';
import {sendConfirmCode} from '../middleware/thunks.js';
import {clearConfirmaccMsgs} from '../actions/index.js';

class AccConfirm extends React.Component{
  componentWillUnmount(){
    this.props.clearStatus();
  }

  render(){
    return(
      <div>
        {
          this.props.isLoggedIn &&
          <Redirect to="/" />
        }

        <Alert type="info" message={"Перед использованием аккаунта нужно его подтвердить." +
           "Код подтверждения высылается на почту, указанную при регистрации"} />
        {
          !!this.props.confirmStatus.errorMsg &&
          <Alert type="error" message={this.props.confirmStatus.errorMsg} />
        }
        {
          !!this.props.confirmStatus.successMsg &&
          <Alert type="info" message={this.props.confirmStatus.successMsg} />
        }
        <AccConfirmForm {...this.props} />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    confirmStatus: state.confirmAcc,
    isLoggedIn: state.auth.isLoggedIn
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    reqConfirmation: (code) =>
      dispatch(sendConfirmCode(code)),
    clearStatus: () => dispatch(clearConfirmaccMsgs())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AccConfirm);
