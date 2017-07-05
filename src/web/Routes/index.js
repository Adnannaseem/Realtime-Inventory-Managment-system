import React from 'react';
import {
    Router,
    Route,
    browserHistory
} from 'react-router';
import Login from './../Pages/Login';
import Dashboard from './../Pages/Dashboard';
import AddProduct from './../Components/AddProduct';
import AddStore from './../Components/AddStore';

export default (
    <Router history={browserHistory}>
        {/*<Route path="/" component={Login} />
        <Route path="dashboard" component={Dashboard} />*/}
        {/*<Route path="/" component={AddProduct} />*/}
        <Route path="/" component={AddStore} />
    </Router>
);
