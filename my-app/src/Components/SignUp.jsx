import React, { useState } from "react";
import Images from "../Images/Employee-Time-Tracking-1400-1024x557.jpg";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

function SignUp() {
  const [cred, setCred] = useState({
    emailId: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmFassword: ""
  });
  const [errored, setErrored] = useState({
    emailError: "",
    passwordError: "",
    confirmFasswordError: ""
  });

  const HandleSignUp = (e) => {
    emailRegex.test(cred.emailId)
      ? setErrored((errored) => ({
          ...errored,
          emailError: ""
        }))
      : setErrored((errored) => ({
          ...errored,
          emailError: "Please enter a valid email address"
        }));

    passwordRegex.test(cred.password)
      ? setErrored((errored) => ({ ...errored, passwordError: "" }))
      : setErrored((errored) => ({
          ...errored,
          passwordError:
            "The password should include minimum 8 characters, 1 uppercase, 1 special character, 1 number, 1 lowercase"
        }));

    cred.password === cred.confirmFassword
      ? setErrored((errored) => ({ ...errored, confirmFasswordError: "" }))
      : setErrored((errored) => ({
          ...errored,
          confirmFasswordError: "Confirm password should match with password"
        }));
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div className="Card-size1">
        <img src={Images} alt="No-Image" className="Image-size" />
        <div style={{ marginLeft: "30%" }}>
          <p className="pargrap1">Desk to perform more on your work.</p>
          <p className="pargrap2">Get ready for your presence to make sense</p>
        </div>
      </div>
      <div className="Card-size2">
        <div className="login-form">
          <div className="Login-header">
            <p className="welcome-text">Welcome!</p>
            <p className="signIn-text">Sign up</p>
          </div>
          <div style={{ width: "100%", marginTop: "0%" }}>
            <label className="label-text">Email ID</label>
            <div>
              <input
                type="text"
                className="input-fields"
                placeholder="Enter your email address"
                value={cred.emailId}
                onChange={(e) => {
                  setCred({ ...cred, emailId: e.target.value });
                }}
              />
              <div style={{ height: "4px" }}>
                {errored.emailError && cred.emailId && (
                  <span className="error-text">{errored.emailError}</span>
                )}
              </div>
            </div>
          </div>
          <div style={{ width: "100%", marginTop: "3%" }}>
            <label className="label-text">First name</label>
            <div>
              <input
                type="text"
                className="input-fields"
                placeholder="Enter your first name"
                value={cred.firstname}
                onChange={(e) => {
                  setCred({ ...cred, firstname: e.target.value });
                }}
              />
            </div>
          </div>
          <div style={{ width: "100%", marginTop: "3%" }}>
            <label className="label-text">Last name</label>
            <div>
              <input
                type="text"
                className="input-fields"
                placeholder="Enter your last name"
                value={cred.lastname}
                onChange={(e) => {
                  setCred({ ...cred, lastname: e.target.value });
                }}
              />
            </div>
          </div>
          <div style={{ width: "100%", marginTop: "3%" }}>
            <label className="label-text">Password</label>
            <div>
              <input
                type="text"
                className="input-fields"
                placeholder="Enter your password"
                value={cred.password}
                onChange={(e) => {
                  setCred({ ...cred, password: e.target.value });
                }}
              />
              {errored.passwordError && cred.password && (
                <span className="error-text">{errored.passwordError}</span>
              )}
            </div>
          </div>
          <div style={{ width: "100%", marginTop: "3%", marginBottom: "4%" }}>
            <label className="label-text">Confirm Password</label>
            <div>
              <input
                type="text"
                className="input-fields"
                placeholder="Confirm password"
                value={cred.confirmFassword}
                onChange={(e) => {
                  setCred({ ...cred, confirmFassword: e.target.value });
                }}
              />
              <div style={{ height: "4px" }}>
                {errored.confirmFasswordError && cred.confirmFassword && (
                  <span className="error-text">
                    {errored.confirmFasswordError}
                  </span>
                )}
              </div>
            </div>
          </div>
          <button
            className={
              !(
                cred.emailId &&
                cred.firstname &&
                cred.lastname &&
                cred.password &&
                cred.confirmFassword
              )
                ? "button-grey"
                : "login-button"
            }
            type="submit"
            disabled={
              !(
                cred.emailId &&
                cred.firstname &&
                cred.lastname &&
                cred.password &&
                cred.confirmFassword
              )
            }
            onClick={HandleSignUp}
          >
            Login
          </button>
          <div>
            <p className="pargrap3">Already have an account?</p>
          </div>
          <a className="signIn-link" href="/">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
