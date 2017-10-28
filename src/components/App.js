import React, { Component } from 'react';
import Smurf from './Smurf';
import { Row, Col } from 'reactstrap';
import SmurfList from "./SmurfList";
import { deleteSmurfs } from '../services/smurf-service';

let startX;
let startWidth;

export default class App extends Component {

	state = {
		activeItem: null,
		data: this.props.data,
		selectedItems: [],
		width: 300,
		isEditMode: false,
		deleting: false
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

	onEdit = (e) => {
		this.setState({
			isEditMode: !this.state.isEditMode
		})
	};

	onDelete = () => {
		const { data, selectedItems } = this.state;

		this.setState({
			deleting: true
		});

		deleteSmurfs(selectedItems).then(() => {
			this.setState({
				data: data.filter(item => !selectedItems.find(item2 => item2.name === item.name)),
				isEditMode: false,
				selectedItems: [],
				deleting: false
			});
		});
	};

	onDragStart = (e) => {
		startX = e.pageX;
		startWidth = this.state.width;
		document.addEventListener("mousemove", this.onDragMove);
		document.addEventListener("mouseup", this.onDragEnd);
	};

	onDragMove = (e) => {
		this.setState({
			width: startWidth + e.pageX - startX
		});
	};

	onDragEnd = (e) => {
		document.removeEventListener("mousemove", this.onDragMove);
		document.removeEventListener("mouseup", this.onDragEnd);
	};

	render() {
		const { data, width, activeItem, selectedItems, isEditMode, deleting } = this.state;

		const content = activeItem ?
			<Smurf {...activeItem} /> :
			<div className="text-center text-muted">Choose a smurf on the right...</div>;

		return (
			<Row className="h-100 bg-white" noGutters>
				<Col className="br overflow-auto" style={{ flex: `0 0 ${width}px` }}>
					<SmurfList
						items={data}
						onItemClick={this.onItemClick}
						onSelectItem={this.onSelectItem}
						onDelete={this.onDelete}
						canDelete={selectedItems.length > 0}
						selectedItems={selectedItems}
						onEdit={this.onEdit}
						isEditMode={isEditMode}/>
					{ deleting && <div className="overlay"/> }
				</Col>
				<Col style={{flex: '0 0 5px', cursor: 'move'}} onMouseDown={this.onDragStart}/>
				<Col className="d-flex align-items-center justify-content-center">
					<div className="w-50">
						{content}
					</div>
				</Col>
			</Row>
		);
	}
}