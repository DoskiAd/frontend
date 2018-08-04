import React from 'react';

const Item = (props) => {
  return(
    <article className="itemlist py-0 my-0">
      <div className="row row-sm pt-3 pb-0 my-0">

        <aside className="col-sm-3 py-0 my-0">
          <div className="img-wrap py-0 my-0">
            <a href="#">
              <img src="images/dummy.jpg" className="img-sm py-0 my-0" />
            </a>
          </div>
        </aside>

        <div className="col-sm-6 py-0 my-0">
          <div className="text-wrap">
				    <h5 className="title">{props.title}</h5>
				    {/*<p>{props.desc}</p>*/}
            <p className="my-0"><a href="#">Страница товара</a></p>
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
      title={item.title}
      price={item.price}
      desc={item.description}
      numPhotos={item.photo}
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
