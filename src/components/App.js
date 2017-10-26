import React, { Component } from 'react';
import Smurf from './Smurf';
import SmurfItem from './SmurfItem';
import { Row, Col } from 'reactstrap';

export default class App extends Component {

	state = {
		filter: null,
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

	onChange = (e) => {
		this.setState({
			filter: e.target.value
		});
	};

	render() {
		const { data } = this.state;
		let items = data;
		if (this.state.filter) {
			items = data.map(smurf => Object.assign({}, smurf, {
				match: smurf.name.match(new RegExp(this.state.filter, "i"))
			})).filter(smurf => smurf.match);
		}

		const content = this.state.activeItem ?
			<Smurf {...this.state.activeItem} /> :
			<div className="text-center text-muted">Choose a smurf on the right...</div>;

		return (
			<Row className="h-100 bg-white" noGutters>
				<Col xs="auto" className="br overflow-auto">
					<input onChange={this.onChange}/>
					{items.map((smurf, i) => <SmurfItem key={smurf.name} item={smurf} onClick={this.onItemClick} />)}
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