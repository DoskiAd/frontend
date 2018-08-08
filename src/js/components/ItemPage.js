import React from 'react';
import Header from './Header.js';
import ItemCardContainer from '../containers/ItemCardContainer.js';

class ItemPage extends React.Component{
  componentDidMount(){
    window.scrollTo(0,0);
  }

  render(){
    return(
      <div>
        <Header />
        <section className="section-content bg padding-y-sm">
          <div className="container">
            <ItemCardContainer {...this.props} />
          </div>
        </section>
      </div>
    );
  }
}

export default ItemPage;
