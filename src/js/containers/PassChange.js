import React from 'react';
import {connect} from 'react-redux';
import ReqResetKeyForm from '../components/ReqResetKeyForm.js';
import PassChangeForm from '../components/PassChangeForm.js';
import Alert from '../components/Alert.js';
import {passChangeAskKey, changePassword} from '../middleware/thunks.js';
import {clearPassChangeStatus} from '../actions/index.js';

class PassChange extends React.Component{
  componentWillUnmount(){
    this.props.clearStatus();
  }

  render(){
    return(
      <div>
        {
          !!this.props.passResetStatus.successMsg &&
          <Alert type="info" message={this.props.passResetStatus.successMsg} />
        }
        {
          !!this.props.passResetStatus.errorMsg &&
          <Alert type="error" message={this.props.passResetStatus.errorMsg} />
        }
        {
          !this.props.passResetStatus.isKeySent &&
          <ReqResetKeyForm {...this.props} />
        }
        {
          this.props.passResetStatus.isKeySent &&
          <PassChangeForm {...this.props} />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    passResetStatus: state.passReset
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    askKey: (email) =>
      dispatch(passChangeAskKey(email)),
    changePass: (key, password, confirm) =>
      dispatch(changePassword(key, password, confirm)),
    clearStatus: () => dispatch(clearPassChangeStatus())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PassChange);
