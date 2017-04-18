import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import ReduxPromise from 'redux-promise';
// react-router 里有三种种模式：browserHistory 、 hashHistory、memoryHistory
// browserHistory 就是追踪 .com/ 之后的路由的变化， hashHistory 则是追踪 # 之后的变化

// import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    {/*注意要写上 history 和 routes*/}
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));
