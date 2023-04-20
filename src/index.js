import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import globalStore  from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={globalStore}>
      <App/>
    </Provider>
  // </React.StrictMode>
);

//redux: global
//context API: page
//rxjs: 