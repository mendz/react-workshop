import React from 'react';
import cn from 'classnames';

const SmurfItem = ({ item, onClick }) => {
	const { name, src, match } = item;
	let nameEl;
	if (match) {
		nameEl = <div>
			<span>{name.substr(0,match.index)}</span>
			<span className="match">{match[0]}</span>
			<span>{name.substr(match.index+match[0].length)}</span>
		</div>
	} else {
		nameEl = <div>{name}</div>
	}
	return <div className={cn("smurf-item d-flex align-items-center px-3 flex-1", {unread: !item.isRead})}
			 style={{cursor: 'pointer'}} onClick={() => onClick(item)}>
		<img src={src} className="rounded-circle mr-3" width="75" height="75"/>
		{nameEl}
	</div>
};

export default SmurfItem;