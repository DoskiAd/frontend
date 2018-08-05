import React from 'react';
import ItemPhotoCarousel from './ItemPhotoCarousel.js';

const ItemCard = (props) => {
  return(
    <div className="card">
    	<div className="row no-gutters">
    		<aside className="col-sm-5 border-right">
          <article>
            <ItemPhotoCarousel photos={props.photos} />
          </article>
    		</aside>
    		<aside className="col-sm-7">
          <article className="p-5">
          	<h3 className="title mb-3">{props.title}</h3>

          <div className="mb-3">
          	<var className="price h3">
          		<span className="currency mr-2">Цена:</span><span className="num">{props.price}</span>
          	</var>
          </div>
          <dl>
            <dt>Описание:</dt>
            <dd><p>{props.desc}</p></dd>
          </dl>
          <dl className="row">
            <dt className="col-sm-4">Имя контакта:</dt>
            <dd className="col-sm-8">{!!props.contactName? props.contactName: "-"}</dd>

            <dt className="col-sm-4">Телефон:</dt>
            <dd className="col-sm-8">{
                props.phone.length > 0?
                  props.phone.map((phone) =>
                    <p className="my-0 py-0" key={phone.value}>{phone.value}</p>): "-"
              }</dd>

            <dt className="col-sm-4">Электронная почта:</dt>
            <dd className="col-sm-8">{
                props.email.length > 0?
                  props.email.map((email) =>
                    <p className="my-0 py-0" key={email.value}>{email.value}</p>): "-"
              }</dd>
          </dl>

          <hr />
          	<div className="row">
          		<div className="col-sm-5">
          			<dl className="dlist-inline">
          			  <dt className="mr-2">Локация:</dt>
          			  <dd>
          			  	{props.location}
          			  </dd>
          			</dl>
          		</div>
          		<div className="col-sm-7">
          			<dl className="dlist-inline">
        				  <dt className="mr-2">Дата публикации:</dt>
        				  <dd>
        				  	{props.date}
        				  </dd>
          			</dl>
          		</div>
          	</div>
          	<hr />
          	<a href="#" className="btn  btn-light">
              <i className="text-warning icon-sm fa fa-heart"></i> В избранное
            </a>
          </article>
    		</aside>
    	</div>
    </div>
  );
}

export default ItemCard;
