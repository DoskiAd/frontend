import React from 'react';
import NavbarCategories from '../containers/NavbarCategories.js';
import SearchForm from './SearchForm.js';
import SignIn from './SignIn.js';
import MakeAnAd from './MakeAnAd.js';
import Favorites from './Favorites.js';

const Header = (props) => {
  return(
    <header className="section-header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
        	<a className="navbar-brand" href="#"><h1 className="my-0 text-warning">DoskiAd</h1></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTop" aria-controls="navbarTop" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTop">
            <NavbarCategories />
          </div>
        </div>
      </nav>

      <section className="header-main shadow-sm">
         <div className="container">
           <div className="row-sm align-items-center">
              <div className="col-lg-15-24 col-sm-8">
                <SearchForm categoriesList={[{"id":2,"name":"Ноутбуки"},{"id":1,"name":"Растения"}]} />
              </div>
              <div className="col-lg-9-24 col-sm-12">
		             <div className="widgets-wrap float-right row no-gutters py-1">
                   <div className="col-auto">
                     <SignIn />
                   </div>
                   <div className="col-auto">
                     <MakeAnAd />
                   </div>
                   <div className="col-auto">
                     <Favorites />
                   </div>
                 </div>
              </div>

           </div>
         </div>
      </section>
      </header>
  );
}

export default Header;