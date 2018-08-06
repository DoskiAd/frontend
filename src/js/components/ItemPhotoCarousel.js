import React from 'react';

const Images = (props) => {
  return props.list.map(
    (img, i) =>
    <div className={"carousel-item text-center" + (i == 0? " active": "")} key={i} >
      <img className="img-fluid" src={img} alt="" key={i} />
    </div>
  );
}

const ItemPhotoCarousel = (props) => {
  return(
    <div id="carouselExampleControls" className="carousel slide my-auto" data-ride="carousel">
      <div className="carousel-inner" role="listbox">
        <Images list={props.photos} />
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" >
        <i className="fa fa-chevron-left icon-md text-secondary"></i>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" >
        <i className="fa fa-chevron-right icon-md text-secondary"></i>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default ItemPhotoCarousel;
