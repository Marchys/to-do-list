import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import devToolsEnhancer from 'remote-redux-devtools';
// import mainReducer from './reducers';
import './index.css';

// const store = createStore(mainReducer, devToolsEnhancer());

ReactDOM.render(
    //<Provider store={store}>
        <App />,
    //</Provider>,
    document.getElementById('root'),
);