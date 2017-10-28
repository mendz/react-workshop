import React, { Component } from 'react';
import SmurfItem from './SmurfItem';

class SmurfList extends Component {

	state = {
		filter: null,
		isEditMode: false
	};

	onChange = (e) => {
		this.setState({
			filter: e.target.value
		});
	};

	render() {
		const { items, onItemClick } = this.props;
		const { filter } = this.state;

		let itemsToRender = items;

		if (filter) {
			const regex = new RegExp(filter, "i");
			itemsToRender = items.map(item => Object.assign({}, item, {
				match: item.name.match(regex)
			})).filter(item => item.match);
		}

		return (
			<div>
				<input onChange={this.onChange}/>
				{itemsToRender.map((smurf, i) => <SmurfItem key={smurf.name} item={smurf} onClick={onItemClick} />)}
			</div>
		);
	}

}

export default SmurfList;