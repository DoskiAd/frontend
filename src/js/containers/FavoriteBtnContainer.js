import React from 'react';
import {connect} from 'react-redux';
import {toggleFavorite} from '../middleware/thunks.js';
import FavoriteBtn from '../components/FavoriteBtn.js';
import {Redirect} from 'react-router-dom';

class FavoriteBtnContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = { redirect: false };
  }

  enableRedirect(){
    this.setState({redirect: true})
  }

  render(){
    return(
      <div>
        {
          this.state.redirect &&
          <Redirect to="/userlogin" />
        }
        {
          !this.props.isLoggedIn &&
          <FavoriteBtn callback={this.enableRedirect.bind(this)}
            unfav={false}
            mini={this.props.mini}
            className={this.props.className} />
        }
        {
          this.props.isLoggedIn &&
          <FavoriteBtn callback={() => this.props.toggleFav(this.props.itemId)}
            unfav={this.props.favoriteIds.indexOf(this.props.itemId) > -1}
            mini={this.props.mini}
            className={this.props.className} />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    favoriteIds: state.favoriteIds
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFav: (id) => dispatch(toggleFavorite(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteBtnContainer);
