import React, { Component } from 'react';
import{ Redirect } from 'react-router-dom';

import ShopPage from './ShopsComponent.js';

class ShopsContainer extends Component {
  constructor(props) {
    super(props);
    // this.checkAuth();
  }

  checkAuth() {
    const authStatus = this.props.isAuthenticated;
    if(authStatus) {
      // do nothing
    } else {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="adbc-body">
        <ShopPage />
      </div>
    );
  }
}

export default ShopsContainer;