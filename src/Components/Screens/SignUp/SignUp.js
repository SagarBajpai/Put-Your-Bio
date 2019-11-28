import React, { Component } from "react";
import "./SignUp.scss";

import TextField from "@material-ui/core/TextField";

class SignUp extends Component {
  render() {
    return (
      <div id="signup">
        <div className="signup__conatiner">
          <div className="signup__conatiner__header">
            <div className="signup__conatiner__header__title">linktree</div>
            <div className="signup__conatiner__header__subtitle">
              Sign up for your Linktree account
            </div>
          </div>
          <div className="signup__container__form">
            <div className="signup__container__form__auth">
              <button className="btn__default">
                <img src={"/images/signup/instagram.svg"} alt="x"></img>
                Sign up with Instagram
              </button>
            </div>
            <div className="signup__container__separator">
              <span>or</span>
            </div>
            <div className="signup__container__form__inputfields">
              <form noValidate autoComplete="off">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Repeat password"
                  variant="outlined"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
