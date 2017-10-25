import React from 'react';

const SmurfItem = ({ item, onClick}) => (
  <div className="d-flex align-items-center" style={{cursor:'pointer'}} onClick={() => onClick(item)}>
		<img src={item.src} className="rounded-circle mr-3" width="75" height="75"/>
		<div>{item.name}</div>
  </div>
);

export default SmurfItem;