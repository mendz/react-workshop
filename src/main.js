const { Component, createElement } = React;
const { render } = ReactDOM;

const SmurfItem = ({ item }) => createElement("div", { className: "d-flex align-items-center bb px-3 py-2", style: { cursor: 'pointer' }},
	createElement("img", { src: item.src, className: "rounded-circle mr-3", width: 75, height: 75 }),
	createElement("div", null, item.name)
);

class App extends Component {
	render() {
		return createElement("div", { className: "container bg-faded"},
			createElement("h1", null, "The Smurfs"),
			smurfs.map(smurf => createElement(SmurfItem, { item: smurf, key: smurf.name }))
		);
	}
}

render(createElement(App), document.getElementById("root"));