import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import rootReducer from './reducers';
import store from './storeconfig';
import './index.css';
import App from './App';
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
		<App />
	</Provider>,	
	document.getElementById('root'));
registerServiceWorker();
