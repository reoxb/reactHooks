import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import fetch from './mock/fetch'
import App from './App';

global.fetch = fetch;

ReactDOM.render(<App />, document.getElementById('root'));
