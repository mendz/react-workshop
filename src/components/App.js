import React, { Component } from 'react';
import Smurf from './Smurf';
import { Row, Col } from 'reactstrap';
import SmurfList from "./SmurfList";

export default class App extends Component {

	state = {
		activeItem: null,
		data: this.props.data,
		selectedItems: []
	};

	onItemClick = (item) => {
		const newData = [...this.state.data];
		newData.splice(newData.indexOf(item), 1, Object.assign(item, {isRead: true}));
		this.setState({
			activeItem: item,
			data: newData
		});
	};

	onSelectItem = (item, isChecked) => {
		let selectedItems;
		if (isChecked) {
			selectedItems = [...this.state.selectedItems, item];
		} else {
			selectedItems = this.state.selectedItems.filter(item2 => item2.name !== item.name);
		}
		this.setState({ selectedItems });
	};

	onDelete = () => {
		this.setState({
			data: this.state.data.filter(item => !this.state.selectedItems.find(item2 => item2.name === item.name))
		});
	};

	resetSelection = () => {
		this.setState({
			selectedItems: []
		});
	};

	render() {
		const { data } = this.state;

		const content = this.state.activeItem ?
			<Smurf {...this.state.activeItem} /> :
			<div className="text-center text-muted">Choose a smurf on the right...</div>;

		return (
			<Row className="h-100 bg-white" noGutters>
				<Col xs="auto" className="br overflow-auto">
					<SmurfList
						items={data}
						onItemClick={this.onItemClick}
						onSelectItem={this.onSelectItem}
						resetSelection={this.resetSelection}
						onDelete={this.onDelete}
						canDelete={this.state.selectedItems.length > 0}/>
				</Col>
				<Col className="d-flex align-items-center justify-content-center">
					<div className="w-50">
						{content}
					</div>
				</Col>
			</Row>
		);
	}
}