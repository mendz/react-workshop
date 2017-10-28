import React, { Component } from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';
import SmurfItem from './SmurfItem';
import { Input, Button } from 'reactstrap';


const SmurfList = ({ items, onItemClick, onSelectItem, canDelete, isEditMode, onDelete, onEdit, selectedItems, activeItem, storeList: { filter, onFilterChange } }) => {

	let itemsToRender = items;

	if (filter) {
		const regex = new RegExp(filter, "i");
		itemsToRender = items.map(item => Object.assign({}, item, {
			match: item.name.match(regex)
		})).filter(item => item.match);
	}

	const isDeleteDisabled = !isEditMode || !canDelete;
	const deleteTooltip = isDeleteDisabled ? "Please select a smurf in order to delete" : '';

	return (
		<div>
			<div className="d-flex p-3">
				<Input onChange={(e) => onFilterChange(e.target.value)} className="mr-3"/>
				<Button color="primary" outline={!isEditMode} onClick={onEdit} className="mr-3"><i className="fa fa-pencil"/></Button>
				<Button color="danger" title={deleteTooltip} disabled={isDeleteDisabled} onClick={onDelete}><i className="fa fa-trash"/></Button>
			</div>
			{itemsToRender.map((item, i) => (
				<div className={cn("d-flex align-items-center bb py-2 position-relative", { active: activeItem && (item.name === activeItem.name) })} key={item.name}>
					{ isEditMode &&
					<input
						className="ml-3"
						type="checkbox"
						onChange={(e) => onSelectItem(item, e.target.checked)}
						checked={!!selectedItems.find(item2 => item2.name === item.name)}
					/> }
					<SmurfItem item={item} onClick={onItemClick} />
				</div>
			))}
		</div>
	);
};

export default observer(SmurfList);