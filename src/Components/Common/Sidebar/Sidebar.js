import React, { Component } from "react";
import "./Sidebar.scss";

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <div className="sidebar__container">
          <div className="sidebar__container_profile">
            <img
              src="/images/sidebar/user.png"
              className="sidebar_user_icon"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
