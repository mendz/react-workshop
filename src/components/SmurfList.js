import React, { Component } from 'react';
import SmurfItem from './SmurfItem';
import { Input, Button } from 'reactstrap';

class SmurfList extends Component {

	state = {
		filter: null,
		isEditMode: false
	};

	onFilterChange = (e) => {
		this.setState({
			filter: e.target.value
		});
	};

	onEdit = (e) => {
		this.setState({
			isEditMode: !this.state.isEditMode
		})
	};

	onDelete = (e) => {
		this.props.onDelete();
		this.props.resetSelection();
		this.setState({
			isEditMode: false
		});
	};

	render() {
		const { items, onItemClick, onSelectItem, canDelete } = this.props;
		const { filter, isEditMode } = this.state;

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
					<Button color="primary" outline={!isEditMode} onClick={this.onEdit} className="mr-3"><i className="fa fa-pencil"/></Button>
					<Button color="danger" title={deleteTooltip} disabled={isDeleteDisabled} onClick={this.onDelete}><i className="fa fa-trash"/></Button>
				</div>
				{itemsToRender.map((item, i) => <div className="d-flex align-items-center bb py-2" key={item.name}>
					{ isEditMode && <input className="ml-3" type="checkbox" onChange={(e) => onSelectItem(item, e.target.checked)} /> }
					<SmurfItem item={item} onClick={onItemClick} />
				</div>)}
			</div>
		);
	}

}

export default SmurfList;