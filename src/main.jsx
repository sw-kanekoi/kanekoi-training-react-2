import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css'
import { Provider } from 'react-redux';

// Redux1:「Reac初心者でも読めば必ずわかるReactのRedux講座」
// import App from './Redux1/App.jsx';
// import store from './Redux1/store/index';

// Redux2:「【React Redux初心者向け】Todoリスト作成を通してしっかり学ぶRedux」
// import App from './Redux2/App.jsx';
// import store from './Redux2/store/index';

// ReduxToolkit:「【React Redux初心者向け】Todoリスト作成を通してしっかり学ぶRedux」
// import App from './ReduxToolkit/App.jsx';
// import {store} from './ReduxToolkit/store/index.jsx';

// ReactRouterDom:「入門者でもわかるReact Routerを利用したルーティング設定の基礎」
// import App from './ReactRouterDom/App.jsx';
// import store from './ReactRouterDom/store/index.jsx';

// タスク管理アプリ:入社時研修リスト内
import App from './TaskManageApp/App.jsx';
import {store} from './TaskManageApp/store/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
       <App /> 
    </Provider>
  </React.StrictMode>
);