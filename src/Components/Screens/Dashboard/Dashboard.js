import React, { Component } from "react";
import "./Dashboard.scss";
import Header from "../../Common/Header/Header";

class Dashboard extends Component {
  render() {
    return (
      <div id="Dashboard">
        <Header />
        <div className="conatiner"></div>
      </div>
    );
  }
}

export default Dashboard;
