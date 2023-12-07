import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
// import App from './component/App';
import reportWebVitals from './reportWebVitals';
// import Converter from './component/Converter';
// import State from "./component/State"
// import Name from './component/Name';
import Dropdown from './component/Dropdown';
import { userColors } from './component/data';
import Assignment from './component/Assignment';
// import Select from './component/Select';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Dropdown colors={ userColors }/> */}
    <Assignment />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
