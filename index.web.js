/* 
    ./index.web.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './src/web/App';
import store from './src/common/store';

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
  ,
  document.getElementById('root'));
