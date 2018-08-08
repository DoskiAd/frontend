import React from 'react';
import {connect} from 'react-redux';
import {postAd} from '../middleware/thunks.js';
import {Redirect} from 'react-router-dom';
import NewAdForm from '../components/NewAdForm.js';
import {clearLoginMsgs} from '../actions/index.js';
import Alert from '../components/Alert.js';

class NewAd extends React.Component{
  componentWillUnmount(){
    this.props.clearMsgs();
  }

  render(){
    if(!this.props.isLoggedIn){
      return <Redirect to="/" />
    }
    return(
      <div>
        {
          !!this.props.messages.info &&
          <Alert type="info" message={this.props.messages.info} />
        }
        {
          !!this.props.messages.err &&
          <Alert type="error" message={this.props.messages.err} />
        }
        <NewAdForm {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    messages: state.loginMsgs,
    isLoggedIn: state.auth.isLoggedIn
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitCallback: (title, price, desc, loc, cat, phone, email, photos) =>
      dispatch(postAd(title, price, desc, loc, cat, phone, email, photos)),
    clearMsgs: () => dispatch(clearLoginMsgs())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewAd);
