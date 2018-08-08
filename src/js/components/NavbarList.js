import React from 'react';

const CategoriesItem =(props) => {
  return(
    <li className={!!props.dropdown? "": "nav-item"}>
      <a href={"#/categorypage/" + props.id}
        className={!!props.dropdown? "dropdown-item": "nav-link"}>{props.name}</a>
    </li>
  );
}

const NavbarList = (props) => {
  let list = props.categoriesList.map((item) => {
    return <CategoriesItem key={item.id}
      dropdown={true}
      name={item.name}
      id={item.id} />
  });
  return(
    <ul className="navbar-nav mr-auto">
      {
        props.categoriesList.length > 0 &&
        <CategoriesItem name={props.categoriesList[0].name}
          id={props.categoriesList[0].id} />
      }
      {
        props.categoriesList.length > 1 &&
        <CategoriesItem name={props.categoriesList[1].name}
          id={props.categoriesList[1].id} />
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
