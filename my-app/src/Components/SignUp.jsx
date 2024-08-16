import React, { useState } from "react";
import Images from "../Images/Employee-Time-Tracking-1400-1024x557.jpg";
import Inputs from "../UI/Inputs";

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

  const handleChange = (e, fieldName) => {
    setCred({ ...cred, [fieldName]: e.target.value });
  };

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

    if (emailRegex.test(cred.emailId) && passwordRegex.test(cred.password)) {
      console.log("Succesfully sign-up");
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
            <p className="signIn-text">Sign up</p>
          </div>
          <Inputs
            label={"Email ID"}
            value={cred.emailId}
            handleChange={(e) => handleChange(e, "emailId")}
            focusText={true}
            placeholder={"Enter your email address"}
            validationText={
              errored.emailError && cred.emailId ? errored.emailError : null
            }
          />
          <Inputs
            label={"First name"}
            value={cred.firstname}
            handleChange={(e) => handleChange(e, "firstname")}
            placeholder={"Enter your first name"}
          />
          <Inputs
            label={"Latst name"}
            value={cred.lastname}
            handleChange={(e) => handleChange(e, "lastname")}
            placeholder={"Enter your last name"}
          />
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
