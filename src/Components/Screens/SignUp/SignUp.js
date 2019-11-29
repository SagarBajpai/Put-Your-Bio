import React, { Component } from "react";
import "./SignUp.scss";
import TextField from "@material-ui/core/TextField";
import {
  validateEmail,
  checkForEmpty,
  validateUsername
} from "../../Middleware/SignUp/Validate";
import constant from "../../Common/Constants";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      emailError: "",
      emailOnBlur: true,
      Username: "",
      usernameError: "",
      usernameOnBlur: true,
      Password: "",
      RepeatPassword: "",
      passwordError: "",
      enableRegisterButton: false
    };
  }

  onChangeCheck = (value, id, error, onBlur) => {
    if (checkForEmpty(value)) {
      this.setState({
        [id]: value,
        [error]: ""
      });
      return false;
    } else {
      this.setState({ [error]: "" });
    }
    if (!onBlur && id === "Email") {
      if (!validateEmail(value)) {
        this.setState({ [error]: "Email does not valid" });
        return false;
      } else {
        this.setState({ [error]: "" });
        return true;
      }
    } else {
      return true;
    }
  };

  checkForPassword = id => {
    const { Password, RepeatPassword } = this.state;
    if (id === "Password" && RepeatPassword.trim().length === 0) {
      if (Password.trim().length === 0 && RepeatPassword.trim().length === 0) {
        return this.setState({
          passwordError: ""
        });
      }
      return;
    }
    if (Password !== RepeatPassword) {
      this.setState({
        passwordError: "Passwords are not matching"
      });
    } else {
      this.setState({
        passwordError: ""
      });
    }
  };

  handleOnChange = e => {
    let id = e.target.id;
    let value = e.target.value;
    let check;
    const { emailOnBlur } = this.state;
    switch (id) {
      case "Email":
        check = this.onChangeCheck(value, id, "emailError", emailOnBlur);
        break;
      case "Username":
        check = validateUsername(value);
        if (!check) {
          this.setState({
            usernameError: "Special characters are not allowed"
          });
        } else {
          this.setState({
            usernameError: ""
          });
        }
        break;
      default:
    }
    this.setState(
      {
        [id]: value
      },
      () => {
        (id === "RepeatPassword" || id === "Password") &&
          this.checkForPassword(id);
      }
    );
  };

  handleOnBlur = e => {
    let id = e.target.id;
    let value = e.target.value;
    switch (id) {
      case "Email":
        if (checkForEmpty(value)) {
          return this.setState({
            emailError: "Email cannot be empty"
          });
        }
        if (!validateEmail(value)) {
          return this.setState({
            emailError: "Email does not valid",
            emailOnBlur: false
          });
        } else {
          this.setState({ emailError: "" });
        }
        break;
      case "Username":
        if (checkForEmpty(value)) {
          return this.setState({
            usernameError: "Username cannot be empty"
          });
        }
        break;
      default:
    }

    this.setState({
      [id]: value
    });
  };

  worthLess = e => {};

  enableRegisterButton = () => {
    const {
      emailError,
      usernameError,
      passwordError,
      Email,
      Username,
      Password,
      RepeatPassword
    } = this.state;
    if (
      !emailError &&
      !usernameError &&
      !passwordError &&
      Email.trim().length !== 0 &&
      Username.trim().length !== 0 &&
      Password.trim().length !== 0 &&
      RepeatPassword.trim().length !== 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  createUser = () => {
    //Will hit API in Future
    const { Email, Username, Password } = this.state;
    console.log("Email : ", Email);
    console.log("Username : ", Username);
    console.log("Password : ", Password);
  };

  render() {
    const {
      emailError,
      emailOnBlur,
      usernameError,
      passwordError
    } = this.state;
    const instagramImage = "/images/signup/instagram.svg";
    return (
      <div id="signup">
        <div className="signup__conatiner">
          <div className="signup__conatiner__header">
            <div className="signup__conatiner__header__title">
              {constant.projectName}
            </div>
            <div className="signup__conatiner__header__subtitle">
              Sign up for your {constant.projectName} account
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
                  error={emailError.length === 0 ? false : true}
                  helperText={emailError ? emailError : false}
                  id="Email"
                  label="Email"
                  variant="outlined"
                  onChange={e => this.handleOnChange(e)}
                  onBlur={
                    emailOnBlur ? e => this.handleOnBlur(e) : this.worthLess()
                  }
                />
                <TextField
                  error={usernameError.length === 0 ? false : true}
                  helperText={usernameError ? usernameError : false}
                  id="Username"
                  label="Username"
                  variant="outlined"
                  onChange={e => this.handleOnChange(e)}
                  onBlur={e => this.handleOnBlur(e)}
                />
                <TextField
                  id="Password"
                  type="password"
                  label="Password"
                  variant="outlined"
                  onChange={e => this.handleOnChange(e)}
                />
                <TextField
                  error={passwordError.length === 0 ? false : true}
                  helperText={passwordError ? passwordError : false}
                  id="RepeatPassword"
                  type="password"
                  label="Repeat password"
                  variant="outlined"
                  onChange={e => this.handleOnChange(e)}
                />
              </form>
              {this.enableRegisterButton() ? (
                <input
                  className="btn btn-primarys signup__form__register__button"
                  type="submit"
                  value="Register"
                  onClick={() => this.createUser()}
                ></input>
              ) : (
                <input
                  className="btn btn-primary disabled signup__form__register__button"
                  style={{ cursor: "not-allowed" }}
                  type="submit"
                  value="Register"
                ></input>
              )}
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
