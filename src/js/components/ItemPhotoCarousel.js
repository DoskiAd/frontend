import React from 'react';

const Images = (props) => {
  return props.list.map(
    (img, i) =>
    <div className={"carousel-item" + (i == 0? " active": "")} key={img}>
      <img className="container-fluid" src={img} alt="" key={img} />
    </div>
  );
}

const ItemPhotoCarousel = (props) => {
  return(
    <div id="carouselExampleControls" className="carousel slide my-auto" data-ride="carousel">
      <div className="carousel-inner" role="listbox">
        <Images list={props.photos} />
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default ItemPhotoCarousel;
