import '@babel/polyfill';
import 'whatwg-fetch';

import 'sanitize.css/sanitize.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// global styles
import './style.scss';


ReactDOM.render(<App />, document.getElementById('app'));
