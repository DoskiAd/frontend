import React from 'react';
import Header from './Header.js';
import ItemsContainer from '../containers/ItemsContainer.js';
import FiltersContainer from '../containers/FiltersContainer.js';
import PagesContainer from '../containers/PagesContainer.js';
import LayoutControl from '../containers/LayoutControl.js';

const HomePage = (props) => {
  return(
    <div>

    <Header home={true} />

    <section className="section-content bg padding-y-sm">
      <div className="container">

        <div className="card mb-2">
          <div className="card-body">
            <div className="row">

              <div className="col-md-3-24"><strong>Фильтр:</strong></div>

              <div className="col-md-21-24">
                <div className="btn-group-toggle" data-toggle="buttons">
                  <FiltersContainer />
                </div>
              </div>

            </div>
            <hr />
            <div className="row">

              <div className="col-md-3-24"><strong>Страницы:</strong></div>

              <div className="col-md-18-24">
                <nav>
                  <ul className="pagination pagination-sm">
                    <PagesContainer />
                  </ul>
                </nav>
              </div>

              <div className="col-md-3-24 text-right">
                <strong className="mr-2">Вид:  </strong>
                <LayoutControl />
              </div>

            </div>
          </div>
        </div>

        <ItemsContainer />

      </div>
    </section>

    </div>
  );
}

export default HomePage;
