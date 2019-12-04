import React, { Component } from "react";
import "./Dashboard.scss";
import Header from "../../Common/Header/Header";
import LinkPad from "../../Utils/Dashboard/LinkPad/LinkPad";

class Dashboard extends Component {
  render() {
    return (
      <div id="dashboard">
        <Header />
        <div className="container">
          <div className="dashboard__linksection">
            <h4>My Links</h4>
            <button className="btn btn-primary add_new_link">
              Add New Link
            </button>
            <LinkPad />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
