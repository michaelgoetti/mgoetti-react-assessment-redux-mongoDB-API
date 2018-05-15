import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// import rootReducer from './reducers';
import store from './storeconfig';
import './index.css';
import './App.css';
import Main from './components/Main';
import EditItem from './components/EditItem';
import registerServiceWorker from './registerServiceWorker';

// const store = createStore(
// 	rootReducer,
// 	applyMiddleware(logger, promiseMiddleware()),
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

store.subscribe(() => {
    console.log(store.getState());
  });

// window.store = store;  // is this needed?

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
