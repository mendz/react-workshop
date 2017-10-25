import React from 'react';
import cn from 'classnames';

const SmurfItem = ({ item, onClick }) => (
  <div className={cn("smurf-item d-flex align-items-center bb px-3 py-2", { unread: !item.isRead })} style={{cursor:'pointer'}} onClick={() => onClick(item)}>
		<img src={item.src} className="rounded-circle mr-3" width="75" height="75"/>
		<div>{item.name}</div>
  </div>
);

export default SmurfItem;