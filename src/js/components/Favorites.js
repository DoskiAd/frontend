import React from 'react';

const Favorites = (props) => {
  return(
    <a href="#" className="widget-header">
			<div className="icontext">
				<div className="icon-wrap"><i className="text-warning icon-sm  fa fa-heart"></i></div>
				<div className="text-wrap text-dark">
					<span className="small round badge badge-secondary">0</span>
					<div>Избранное</div>
				</div>
			</div>
		</a>
  );
}

export default Favorites;
