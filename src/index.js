import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import App from './App';
import './style.scss';
import smurfs from './smurfs.json';

const div = document.createElement('div');
div.style.height = '100%';
div.style.padding = '15px';
document.body.appendChild(div);

const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<Component data={smurfs}/>
		</AppContainer>,
		div
	)
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./App', () => { render(App) })
}