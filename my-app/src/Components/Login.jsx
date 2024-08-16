import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Images from "../Images/Employee-Time-Tracking-1400-1024x557.jpg";
import AlertBox from "../UI/AlertBox";
import Inputs from "../UI/Inputs";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

function Login() {
  const navigate = useNavigate();
  const [cred, setCred] = useState({ emailId: "", password: "" });
  const [loginError, setLoginError] = useState();
  const [errored, setErrored] = useState({
    emailError: "",
    passwordError: ""
  });

  const handleEmailChange = (e) => {
    setCred({ ...cred, emailId: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setCred({ ...cred, password: e.target.value });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = (e) => {
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
      if (cred.emailId.toLowerCase() === "shashi@qa.com") {
        const fakeAuthToken = "123456";
        localStorage.setItem("authToken", fakeAuthToken);
        navigate("/organizations", { state: { key: true } });
      } else {
        setLoginError(true);
      }
    }
  };

  const handleClose = () => {
    setLoginError(false);
  };

  return (
    <>
      <div style={{ display: "flex", height: "100vh" }}>
        <AlertBox
          open={loginError}
          duration={5000}
          handleClose={handleClose}
          severity={"error"}
          message={"Invalid email or password."}
        ></AlertBox>
        <div className="Card-size1">
          <img src={Images} alt="No-Image" className="Image-size" />
          <div style={{ marginLeft: "30%" }}>
            <p className="pargrap1">Desk to perform more on your work.</p>
            <p className="pargrap2">
              Get ready for your presence to make sense
            </p>
          </div>
        </div>
        <div className="Card-size2">
          <div className="login-form">
            <div className="Login-header">
              <p className="welcome-text">Welcome!</p>
              <p className="signIn-text">Sign in to your account</p>
            </div>
            <Inputs
              label={"Email ID"}
              value={cred.emailId}
              handleChange={handleEmailChange}
              focusText={true}
              validationText={
                errored.emailError && cred.emailId ? errored.emailError : null
              }
              handleKeyDown={handleKeyDown}
            />
            <Inputs
              label={"Password"}
              value={cred.password}
              handleChange={handlePasswordChange}
              validationText={
                errored.passwordError && cred.password
                  ? errored.passwordError
                  : null
              }
              handleKeyDown={handleKeyDown}
            />
            <a className="forgot-text" href="/forgotpassword">
              Forgot Password?
            </a>
            <button
              className={
                !(cred.emailId && cred.password)
                  ? "button-grey"
                  : "login-button"
              }
              type="submit"
              disabled={!(cred.emailId && cred.password)}
              onClick={handleSubmit}
            >
              Login
            </button>
            <div>
              <p className="pargrap3">Don't have an account?</p>
            </div>
            <a className="signIn-link" href="/signup">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
