import React from 'react';
import {Link} from 'react-router-dom';

const HeaderSimple = () => {
  return(
    <header className="section-header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/"><h1 className="my-0 text-warning">DoskiAd</h1></Link>
        </div>
      </nav>
      <section className="header-main shadow-sm">
      </section>
    </header>
  );
}

export default HeaderSimple;
