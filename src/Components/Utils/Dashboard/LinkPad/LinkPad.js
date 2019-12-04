import React from "react";
import "./LinkPad.scss";
import Switch from "react-switch";

function LinkPad(props) {
  return (
    <div className="linkPad">
      <div className="linkPad__shell">
        <div className="linkPad__draggable">
          <div className="linkPad__dots__container">
            <div className="linkPad__dots"></div>
            <div className="linkPad__dots"></div>
            <div className="linkPad__dots"></div>
          </div>
        </div>
        <div className="linkPad__input">
          <div className="linkPad__input__section">
            <div className="linkPad__input_fields">
              <div>
                <input type="text" placeholder="Title" />
              </div>
              <div>
                <input type="text" placeholder="http://url" />
              </div>
            </div>
            <div className="linkPad__input_options">
              <label>
                <Switch
                  // checked={this.state.checked}
                  // onChange={this.handleChange}
                  onColor="#86d3ff"
                  onHandleColor="#2693e6"
                  handleDiameter={20}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                  height={20}
                  width={48}
                  className="react-switch"
                  id="material-switch"
                />
              </label>
            </div>
          </div>
          <div className="linkPad__options">_</div>
        </div>
      </div>
    </div>
  );
}

export default LinkPad;
