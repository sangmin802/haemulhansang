import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import Components from './components.js'

import store from './store.js';

ReactDOM.render(
  <Provider store = { store }>
    <Components.App />
  </Provider>, document.getElementById('root'));
