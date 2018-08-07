import React from 'react';
import {Redirect} from 'react-router-dom';

class CategoriesItem extends React.Component{
  constructor(props){
    super(props);
    this.state = { redirect: false }
  }

  enableRedirect(){
    this.setState({redirect: true});
  }

  render(){
    return(
      <li className={!!this.props.dropdown? "": "nav-item"}>
        {
          this.state.redirect && !this.props.home &&
          <Redirect to="/" />
        }
        <a href="#"
          className={!!this.props.dropdown? "dropdown-item": "nav-link"}
          onClick={(event) =>{
            event.preventDefault();
            this.props.callback();
            this.enableRedirect.bind(this)();
          }} >{this.props.name}</a>
      </li>
    );
  }
}

const NavbarList = (props) => {
  let list = props.categoriesList.map((item) => {
    return <CategoriesItem home={props.home} key={item.id}
      dropdown={true}
      name={item.name}
      callback={() => props.callback(item.id)} />
  });
  return(
    <ul className="navbar-nav mr-auto">
      {
        props.categoriesList.length > 0 &&
        <CategoriesItem home={props.home} name={props.categoriesList[0].name}
          callback={() => props.callback(props.categoriesList[0].id)} />
      }
      {
        props.categoriesList.length > 1 &&
        <CategoriesItem home={props.home} name={props.categoriesList[1].name}
          callback={() => props.callback(props.categoriesList[1].id)} />
      }
      {
        props.categoriesList.length > 1 &&
        <li className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
            Все категории...
          </a>
          <ul className="dropdown-menu">
            {list}
          </ul>
        </li>
      }
    </ul>
  );
}

export default NavbarList;
