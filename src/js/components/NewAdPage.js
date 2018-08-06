import React from 'react';
import HeaderSimple from './HeaderSimple';

const NewAdPage = (props) => {
  return(
    <div>
      <HeaderSimple />

      <section className="section-content bg padding-y-sm">
        <div className="row justify-content-center">
          <div className="col-sm-10">

            <div className="card">
              <header className="card-header">
                <h4 className="card-title mt-2">Новое объявление</h4>
              </header>
              <article className="card-body">
              </article>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default NewAdPage;
