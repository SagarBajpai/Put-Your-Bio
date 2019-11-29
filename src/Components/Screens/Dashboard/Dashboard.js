import React, { Component } from "react";
import "./Dashboard.scss";
import Header from "../../Common/Header/Header";

class Dashboard extends Component {
  render() {
    return (
      <div id="dashboard">
        <Header />
        <div className="container">
          <div className="dashboard__linksection">
            <h4>My Links</h4>
            <button className="btn btn-primary">Add New Link</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
