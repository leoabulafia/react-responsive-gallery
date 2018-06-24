import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from 'reducers';
import App from 'components/App';
//css
import 'index.css';

export const store = createStore(
	reducers,
	{},
	applyMiddleware(reduxThunk, logger)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
