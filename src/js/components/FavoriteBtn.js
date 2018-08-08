import React from 'react';

const FavoriteBtn = (props) => {
  let cls = "icon-sm fa fa-heart " +
    (props.unfav?"text-secondary":"text-warning");
  let text = props.unfav? "Убрать": "В избранное";
  return(
    <a href="#" className={props.className}
      onClick={(event) => {
        event.preventDefault();
        props.callback();
      }} >
      <i className={cls} ></i> {props.mini? null: text}
    </a>
  );
}

export default FavoriteBtn;
