import React from 'react';
import Header from './Header.js';

const HomePage = (props) => {
  return(
    <div>
    <Header {...props} />
    <section className="section-content bg padding-y-sm">
      <div className="container">
      </div>
    </section>
    </div>
  );
}

export default HomePage;
