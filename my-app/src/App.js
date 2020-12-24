import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout.js/Logout';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" ><Checkout /></Route>
            <Route path="/orders" ><Orders /></Route>
            <Route path="/auth" ><Auth /></Route>
            <Route path="/logout" ><Logout /></Route>
            <Route path="/" exact ><BurgerBuilder /></Route>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
