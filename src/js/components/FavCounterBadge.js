import React from 'react';

const FavCounterBadge = (props) => {
  return(
    <span className="small round badge badge-secondary">{props.count}</span>
  );
}

export default FavCounterBadge;
