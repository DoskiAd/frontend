import React from 'react';

const DropdownCategoriesItem = (props) => {
  return(
    <li>
      <a className="dropdown-item" href="#">{props.name}</a>
    </li>
  );
}

const CategoriesItem = (props) => {
  return(
    <li className="nav-item">
      <a href="#" className="nav-link">{props.name}</a>
    </li>
  )
}

const NavbarList = (props) => {
  let list = props.categoriesList.map((item) => {
    return <DropdownCategoriesItem key={item.id} name={item.name} />
  });
  return(
    <ul className="navbar-nav mr-auto">
      {
        props.categoriesList.length > 0 &&
        <CategoriesItem name={props.categoriesList[0].name} />
      }
      {
        props.categoriesList.length > 1 &&
        <CategoriesItem name={props.categoriesList[1].name} />
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
