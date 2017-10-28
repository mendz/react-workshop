import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import App from './components/App';
import './sass/style.scss';
import 'font-awesome/scss/font-awesome.scss';
import smurfs from './data/smurfs.json';
import store from './store';

store.data = smurfs;

const div = document.createElement('div');
div.style.height = '100%';
div.style.padding = '15px';
document.body.appendChild(div);

const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		div
	)
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./components/App', () => { render(App) })
}