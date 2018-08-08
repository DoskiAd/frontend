import React from 'react';
import NavbarCategories from '../containers/NavbarCategories.js';
// import SearchForm from './SearchForm.js';
import Search from '../containers/Search.js';
import UserBtnContainer from '../containers/UserBtnContainer.js';
import ProtectedRedirectBtnContainer from '../containers/ProtectedRedirectBtnContainer.js';
import FavCounter from '../containers/FavCounter.js';

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
            <NavbarCategories home={props.home} />
          </div>
        </div>
      </nav>

      <section className="header-main shadow-sm">
         <div className="container">
           <div className="row-sm align-items-center">
              <div className="col-lg-12-24">
                <Search />
              </div>
              <div className="col-lg-12-24">
		             <div className="widgets-wrap float-right row no-gutters py-1">
                   {
                     !!props.favorites &&
                     <div className="col-auto">
                       <h3 className="mx-2 my-0" >Избранное</h3>
                     </div>
                   }
                   <div className="col-auto">
                     <UserBtnContainer />
                   </div>
                   <div className="col-auto">
                      <ProtectedRedirectBtnContainer icon="fa-table"
                        redirect="/newad">
                        Создать<br />объявление
                      </ProtectedRedirectBtnContainer>
                   </div>
                   {
                     !props.favorites &&
                     <div className="col-auto">
                       <ProtectedRedirectBtnContainer icon="fa-heart"
                         redirect="/favorites">
                         <FavCounter />
               					 <div>Избранное</div>
                       </ProtectedRedirectBtnContainer>
                     </div>
                   }
                 </div>
              </div>

           </div>
         </div>
      </section>
      </header>
  );
}

export default Header;
