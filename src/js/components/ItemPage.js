import React from 'react';
import Header from './Header.js';
import ItemCard from './ItemCard.js';

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
            <ItemCard title={this.props.title}
              price={this.props.price}
              desc={this.props.desc}
              phone={this.props.phone}
              email={this.props.email}
              location={this.props.location}
              date={this.props.date}
              photos={this.props.photos}
              contactName={this.props.contactName} />
          </div>
        </section>
      </div>
    );
  }
}

export default ItemPage;
