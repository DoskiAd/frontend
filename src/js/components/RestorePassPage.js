import React from 'react';
import HeaderSimple from './HeaderSimple';

class RestorePassPage extends React.Component{
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
                  <a href="#/login" className="float-right btn btn-outline-primary mt-1">Войти</a>
                	<h4 className="card-title mt-2">Восстановление пароля</h4>
                </header>
                <article className="card-body">
                  <form>
                  	<div className="form-group">
                  		<label>Адрес электронной почты:</label>
                  		<input type="email" className="form-control" placeholder="" />
                  	</div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block"> Выслать пароль </button>
                    </div>
                  </form>
                </article>
              </div>

            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default RestorePassPage;
