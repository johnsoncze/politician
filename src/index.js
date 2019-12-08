import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import setupStore from './redux/store';
import 'typeface-source-serif-pro';

const store = setupStore()

ReactDOM.render(
	<Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
	</Provider>,
	document.getElementById('root'));

serviceWorker.unregister();
