import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './storeconfig';
import './index.css';
import './App.css';
import Main from './components/Main';
import EditItem from './components/EditItem';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter basename='/'>
			<Switch>
				<Route exact path='/' component={Main}/>
				<Route path='/editItem/:id' component={EditItem}/>
			</Switch>
		</BrowserRouter>
	</Provider>,	
	document.getElementById('root'));
registerServiceWorker();
