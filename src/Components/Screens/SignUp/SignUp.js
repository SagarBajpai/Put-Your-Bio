import React, { Component } from "react";
import "./SignUp.scss";

import TextField from "@material-ui/core/TextField";

class SignUp extends Component {
  render() {
    const instagramImage = "/images/signup/instagram.svg";
    return (
      <div id="signup">
        <div className="signup__conatiner">
          <div className="signup__conatiner__header">
            <div className="signup__conatiner__header__title">Waycool</div>
            <div className="signup__conatiner__header__subtitle">
              Sign up for your Waycool account
            </div>
          </div>
          <div className="signup__container__form">
            <div className="signup__container__form__auth">
              <button className="btn__default">
                <img src={instagramImage} alt="x"></img>
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
                <input
                  className="btn btn-primary disabled signup__form__register__button"
                  type="submit"
                  value="Register"
                ></input>
              </form>
            </div>
          </div>
          <div className="signup__container_footer">
            <div className="signup__container_footer_layer1">
              <h5>Already have an account?</h5>
            </div>
            <div className="signup__container_footer_layer2">
              <p>Trust Centre</p>
              <p>Report a Violation</p>
              <p>Jobs</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
