import React from 'react';
import ReactDOM from 'react-dom';
import App from '@perseus/App.jsx';

import 'unfetch/polyfill';
import 'regenerator-runtime/runtime'

import '@perseus/styles.css';

ReactDOM.render(<App />, document.getElementById('app'));
