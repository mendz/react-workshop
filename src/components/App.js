import React, { Component } from 'react';
import Smurf from './Smurf';
import SmurfItem from './SmurfItem';

export default class App extends Component {

	state = {
		activeItem: null,
		data: this.props.data
	};

	onItemClick = (item) => {
		const newData = [...this.state.data];
		newData.splice(newData.indexOf(item), 1, Object.assign(item, {isRead: true}));
		this.setState({
			activeItem: item,
			data: newData
		});
	};

	render() {
		const { data } = this.state;

		const content = this.state.activeItem ?
			<Smurf {...this.state.activeItem} /> :
			<div className="text-center text-muted">Choose a smurf on the right...</div>;

		return (
			<div className="h-100 bg-white row no-gutters">
				<div className="col-auto br overflow-auto">
					{data.map(smurf => <SmurfItem key={smurf.name} item={smurf} onClick={this.onItemClick}/>)}
				</div>
				<div className="col d-flex align-items-center justify-content-center">
					<div className="w-50">
						{content}
					</div>
				</div>
			</div>
		);
	}
}