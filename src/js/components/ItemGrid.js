import React from 'react';
import {Link} from 'react-router-dom';
import {formImageUrl} from '../helpers.js';

const Item = (props) => {
  return(
    <div className="col-md-3">
    	<figure className="card card-product">
    		<div className="img-wrap">
    			<Link to={"/item/" + props.id} className="title" >
            <img src={
                !!props.photo? formImageUrl(props.id, 1): "images/dummy.png"
              } 
              className="image-sm" />
          </Link>
    		</div>
    		<figcaption className="info-wrap">
          <Link to={"/item/" + props.id} className="title" >{props.title}</Link>
    			<div className="action-wrap">
            <a href="#" className="btn btn-light btn-sm float-right py-0 my-0">
              <i className="text-warning icon-sm fa fa-heart"></i>
            </a>
    				<div className="price-wrap h5">
    					<span className="price-new">{"Цена: " + props.price}</span>
    				</div>
    			</div>
    		</figcaption>
    	</figure>
    </div>

  );
}

const ItemGrid = (props) => {
  let list = props.items.map((item) => {
    return(
      <Item key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        photo={item.photos} />
    );
  })
  return(
    <div className="row-sm">
      {list}
    </div>
  );
}

export default ItemGrid;
