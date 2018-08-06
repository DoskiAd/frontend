import React from 'react';
import $ from 'jquery';
import {Redirect} from 'react-router-dom';

class ProtectedRedirectBtn extends React.Component{
  constructor(props){
    super(props);
    this.state={redirect: false}
  }

  setRedirect(){
    this.setState({redirect: true});
  }

  render(){
    $(() => {
      $('[data-toggle="tooltip"]').tooltip()
    });

    if(this.state.redirect){
      return <Redirect to={this.props.redirect} />
    }

    return(
      <a href="#" className="widget-header">
  			<div className="icontext">
  				<div className="icon-wrap">
            <i className={"text-warning icon-sm fa " + this.props.icon}></i>
          </div>
  				<div className="text-wrap text-dark">
  					{
              !this.props.isLoggedIn &&
              <button
                type="button"
                className="btn btn-link text-dark mx-0 my-0 px-0 py-0"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="Необходима регистрация"
                aria-describedby="logintip"
                style={{"textDecoration": "none"}}>
                {this.props.children}
              </button>
            }
            {
              this.props.isLoggedIn &&
              <button
                type="button"
                className="btn btn-link text-dark mx-0 my-0 px-0 py-0"
                onClick={(event) => {
                  event.preventDefault();
                  this.setRedirect.bind(this)();
                }}
                style={{"textDecoration": "none"}}>
                {this.props.children}
              </button>
            }

  				</div>
  			</div>
  		</a>
    );
  }
}

export default ProtectedRedirectBtn;
