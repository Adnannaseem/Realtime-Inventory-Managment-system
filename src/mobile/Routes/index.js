import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Login from './../Pages/Login';
import Dashboard from './../Pages/Dashboard';
import AddProduct from './../Components/AddProduct';
import AddStore from './../Components/AddStore';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            {/*<Scene key="auth">
                <Scene key="login" component={Login} title="Please login" />
            </Scene>
            
                <Scene key="dashboard" component={Dashboard} title="dashboard" />*/}
                {/*<Scene key="addproduct" component={AddProduct} title="Add Product" />*/}
                <Scene key="addstore" component={AddStore} title="Add Store" />
            
        </Router>
    );
};

export default RouterComponent;
