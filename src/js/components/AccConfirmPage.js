import React from 'react';
import HeaderSimple from './HeaderSimple';
import AccConfirm from '../containers/AccConfirm.js';

class AccConfirmPage extends React.Component{
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
                  <a href="#/userlogin" className="float-right btn btn-outline-primary mt-1">Вход</a>
                  <h4 className="card-title mt-2">Подтверждение аккаунта</h4>
                </header>
                <article className="card-body">
                  <AccConfirm />
                </article>
                </div>

            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AccConfirmPage;
