import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Images from "../Images/Employee-Time-Tracking-1400-1024x557.jpg";
import Alert from "./Alert";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

function Login() {
  const navigate = useNavigate();
  const [showAlert, setAlert] = useState(false);
  const [cred, setCred] = useState({ emailId: "", password: "" });
  const [errored, setErrored] = useState({
    emailError: "",
    passwordError: ""
  });

  const displayData = (e) => {
    if (emailRegex.test(cred.emailId) || passwordRegex.test(cred.password)) {
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
        ? setErrored((errored) => ({
            ...errored,
            passwordError: ""
          }))
        : setErrored((errored) => ({
            ...errored,
            passwordError: "Please enter a valid password"
          }));
    } else {
      setErrored((errored) => ({
        ...errored,
        passwordError: "Please enter a valid password",
        emailError: "Please enter a valid email address"
      }));
    }

    if (emailRegex.test(cred.emailId) && passwordRegex.test(cred.password)) {    
      navigate('/organization')
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    }
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
            <p className="signIn-text">Sign in to your account</p>
          </div>
          <div style={{ width: "100%" }}>
            <label className="label-text">Email ID</label>
            <div>
              <input
                type="text"
                className="input-fields"
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
          <div style={{ width: "100%", marginTop: "4%" }}>
            <label className="label-text">Password</label>
            <div>
              <input
                type="text"
                className="input-fields"
                value={cred.password}
                onChange={(e) => {
                  setCred({ ...cred, password: e.target.value });
                }}
              />
              <div style={{ height: "4px" }}>
                {errored.passwordError && cred.password && (
                  <span className="error-text">{errored.passwordError}</span>
                )}
              </div>
            </div>
          </div>
          <a className="forgot-text" href="/forgotpassword">
            Forgot Password?
          </a>
          <button
            className={
              !(cred.emailId && cred.password) ? "button-grey" : "login-button"
            }
            type="submit"
            disabled={!(cred.emailId && cred.password)}
            onClick={displayData}
            >
            Login
          </button>
          <Alert message="Successfully logged in." show={showAlert}></Alert>
          <div>
            <p className="pargrap3">Don't have an account?</p>
          </div>
          <a className="signIn-link" href="/signup">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
