import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './src/components/App.jsx';
import App1 from './src/components/App1.jsx';
import Scheduler from './src/components/Scheduler.jsx';
import ReactBootstrapStyle from './src/components/ReactBootstrapStyle.jsx';
import reducer from './src/Reducer';

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<ReactBootstrapStyle />
	</Provider>,
	document.getElementById('app')
	);