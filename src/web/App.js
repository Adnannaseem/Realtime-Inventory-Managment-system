
/*
    ./src/web/components/App.jsx
*/
import React from 'react';
import routes from './Routes';

export default class App extends React.Component {
  render() {
    return (
      <div>
        {routes}
      </div>
    );
  }
}
