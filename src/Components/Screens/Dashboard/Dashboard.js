import React, { Component } from "react";
import "./Dashboard.scss";
import Header from "../../Common/Header/Header";
import LinkPad from "../../Utils/Dashboard/LinkPad/LinkPad";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true
    };
  }

  handleChange = checked => {
    console.log("checked : ", this.state.checked);
    this.setState({ checked });
  };

  handleOnClick = e => {
    console.log("e  : ", e);
  };

  render() {
    const { checked } = this.state;
    return (
      <div id="dashboard">
        <Header />
        <div className="container">
          <div className="dashboard__linksection">
            <h4>My Links</h4>
            <button className="btn btn-primary add_new_link">
              Add New Link
            </button>
            <LinkPad
              onChange={this.handleChange}
              checked={checked}
              onClick={e => this.handleOnClick(e)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
