import React, { Component } from 'react';
import cn from 'classnames';
import {CSSTransition} from 'react-transition-group'
import SmurfItem from './SmurfItem';
import { Input, Button } from 'reactstrap';

class SmurfList extends Component {

	state = {
		filter: null,
	};

	onFilterChange = (e) => {
		this.setState({
			filter: e.target.value
		});
	};

	render() {
		const { items, onItemClick, onSelectItem, canDelete, isEditMode, onDelete, onEdit, selectedItems, activeItem, deleteTransition, onDeleteTransitionEnd } = this.props;
		const { filter } = this.state;

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
					<Input onChange={this.onFilterChange} className="mr-3"/>
					<Button color="primary" outline={!isEditMode} onClick={onEdit} className="mr-3"><i className="fa fa-pencil"/></Button>
					<Button color="danger" title={deleteTooltip} disabled={isDeleteDisabled} onClick={onDelete}><i className="fa fa-trash"/></Button>
				</div>
				{itemsToRender.map((item, i) => {
					const isSelected = !!selectedItems.find(item2 => item2.name === item.name);
					const isActive = activeItem && (item.name === activeItem.name);
					return <CSSTransition timeout={500} classNames="collapse" in={deleteTransition && isSelected} key={item.name} onEntered={onDeleteTransitionEnd}>
						<div
							className={cn("d-flex align-items-center bb py-2 position-relative", {active: isActive})}>
							{isEditMode &&
							<input
								className="ml-3"
								type="checkbox"
								onChange={(e) => onSelectItem(item, e.target.checked)}
								checked={isSelected}
							/>}
							<SmurfItem item={item} onClick={onItemClick}/>
						</div>
					</CSSTransition>
				})}
			</div>
		);
	}

}

export default SmurfList;