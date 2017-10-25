import React, { Component } from 'react';
import Smurf from './Smurf';
import SmurfItem from './SmurfItem';

export default class App extends Component {

	state = {
		activeItem: null
	};

	onItemClick = (item) => {
		this.setState({
			activeItem: item
		});
	};

	render() {
		const { data } = this.props;

		const content = this.state.activeItem ?
			<Smurf {...this.state.activeItem} /> :
			<div className="text-center text-muted">Choose a smurf on the right...</div>;

		return (
			<div className="h-100 bg-white row no-gutters">
				<div className="col-auto br p-3 overflow-auto">
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