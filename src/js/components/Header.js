import React from 'react';
import NavbarCategories from '../containers/NavbarCategories.js';
import Search from '../containers/Search.js';
import UserBtnContainer from '../containers/UserBtnContainer.js';
import ProtectedLinkBtnContainer from '../containers/ProtectedLinkBtnContainer.js';
import FavCounter from '../containers/FavCounter.js';
import {Link} from 'react-router-dom';

const Header = (props) => {
  return(
    <header className="section-header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
        	<Link className="navbar-brand" to="/"><h1 className="my-0 text-warning">DoskiAd</h1></Link>
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

              <div className="col-lg-12-24">
                {
                  !props.favorites &&
                  <Search />
                }
                {
                  !!props.favorites &&
                  <h3 className="text-secondary">
                    <i className="fa fa-heart text-warning mr-3"></i> ИЗБРАННОЕ
                  </h3>
                }
              </div>

              <div className="col-lg-12-24">
		             <div className="widgets-wrap float-right row no-gutters py-1">
                   <div className="col-auto">
                     <UserBtnContainer />
                   </div>
                   <div className="col-auto">
                      <ProtectedLinkBtnContainer icon="fa fa-table"
                        redirect="/newad">
                        Создать<br />объявление
                      </ProtectedLinkBtnContainer>
                   </div>
                   {
                     !props.favorites &&
                     <div className="col-auto">
                       <ProtectedLinkBtnContainer icon="fa fa-heart"
                         redirect="/favorites">
                         <FavCounter />
               					 <div>Избранное</div>
                       </ProtectedLinkBtnContainer>
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
