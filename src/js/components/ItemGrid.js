import React from 'react';

const Item = (props) => {
  return(
    <div className="col-md-3">
    	<figure className="card card-product">
    		<div className="img-wrap">
    			<a href="#"><img src="images/dummy.jpg" /></a>
    		</div>
    		<figcaption className="info-wrap">
    			<a href="#" className="title">{props.title}</a>
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
        title={item.title}
        price={item.price} />
    );
  })
  return(
    <div className="row-sm">
      {list}
    </div>
  );
}

export default ItemGrid;
