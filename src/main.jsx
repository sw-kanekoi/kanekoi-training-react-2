import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRedux1 from './Redux1/App.jsx'; // 「Reac初心者でも読めば必ずわかるReactのRedux講座」
import AppRedux2 from './Redux2/App.jsx'; // 「【React Redux初心者向け】Todoリスト作成を通してしっかり学ぶRedux」
// import './index.css'
import { Provider } from 'react-redux';
import store from './Redux1/store/index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
       {/* 「Reac初心者でも読めば必ずわかるReactのRedux講座」 */}
       {/* <AppRedux1 />  */}
       {/* 「【React Redux初心者向け】Todoリスト作成を通してしっかり学ぶRedux」 */}
       <AppRedux2 /> 

    </Provider>
  </React.StrictMode>
);