import React from 'react';
import {Link} from 'react-router-dom';
import {formImageUrl} from '../helpers.js';

const Item = (props) => {
  return(
    <article className="itemlist py-0 my-0">
      <div className="row row-sm pt-3 pb-0 my-0">

        <aside className="col-sm-3 py-0 my-0">
          <div className="img-wrap py-0 my-0">
            <Link to={"/item/" + props.id} >
              <img src={
                  !!props.photo? formImageUrl(props.id, 1): "images/dummy.png"
                }
                className="img-sm py-0 my-0" />
            </Link>
          </div>
        </aside>

        <div className="col-sm-6 py-0 my-0">
          <div className="text-wrap">
				    <h5 className="title">{props.title}</h5>
            <p className="my-0">
              <Link to={"/item/" + props.id} >Страница товара</Link>
            </p>

            <p className="my-0 text-muted">{props.date}</p>
            <p className="my-0 text-muted">{props.location}</p>
			    </div>
        </div>

        <aside className="col-sm-3 py-0 my-0">
          <div className="border-left p-4">
    				<div className="price-wrap">
    					<span className="h5 my-1 py-0 price">{"Цена: " + props.price}</span>
    				</div>
    				<p><a href="#" className="btn btn-light">
              <i className="text-warning icon-sm fa fa-heart"></i> В избранное
            </a></p>
			    </div>
        </aside>

      </div>
    </article>
  );
}

const ItemList = (props) => {
  let list = props.items.map((item) => {
    return <Item key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      desc={item.description}
      photo={item.photos}
      date={item.date}
      location={item.location} />
  });
  return(
    <div className="card">
      {list}
    </div>
  );
}

export default ItemList;
