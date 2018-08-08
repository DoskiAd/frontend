import React from 'react';
import HeaderSimple from './HeaderSimple';
import Signup from '../containers/Signup.js';
import {Link} from 'react-router-dom';

class SignupPage extends React.Component{
  componentDidMount(){
    window.scrollTo(0,0);
  }

  render(){
    return(
      <div>
        <HeaderSimple />

        <section className="section-content bg padding-y-sm">
          <div className="row justify-content-center">
            <div className="col-sm-5">

              <div className="card">
                <header className="card-header">
                	<Link to="/userlogin" className="float-right btn btn-outline-primary mt-1">Вход</Link>
                	<h4 className="card-title mt-2">Регистрация</h4>
                </header>
                <article className="card-body">
                  <Signup />
                </article>
              </div>

            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SignupPage;
