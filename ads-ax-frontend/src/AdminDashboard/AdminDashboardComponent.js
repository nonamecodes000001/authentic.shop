import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../_styles/ADbC.css';

class AdminDashboardComponent extends Component {
  constructor(props) {
    super(props);

    this.exitUser = this.exitUser.bind(this);
  }

  exitUser = () => {
    this.props.logoutUser(false);
    this.props.history.push('/');
  }

  render() {
    return (
      <React.Fragment>
        <div className="adbc--header__div">
          <h1>Admin.Authentic.Shop</h1>
        </div>
        <div className="adbc--main__div">
          <div style={{textAlign:'left'}}>
            <Link to="/dashboard/orders" className="main-link">Orders</Link>
            <Link to="" className="main-link">Products</Link>
            <Link to="" className="main-link">Hotspots</Link>
            <Link to="" className="main-link">Shops</Link>
            <h1 className="signout-btn" onClick={this.exitUser}>Sign Out</h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminDashboardComponent;