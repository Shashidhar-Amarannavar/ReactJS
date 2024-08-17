import React, { useState } from "react";
import Images from "../Images/Employee-Time-Tracking-1400-1024x557.jpg";
import Inputs from "../UI/Inputs";
import ButtonComp from "../UI/ButtonComp";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function ForgotPassword() {
  const [emailId, setemailId] = useState();
  const [emailError, setEmailError] = useState();

  const handleResetPassword = () => {
    emailRegex.test(emailId)
      ? setEmailError("")
      : setEmailError("Please enter a valid email address");
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
          <Inputs
            label={"Email ID"}
            value={emailId}
            handleChange={(e) => {
              setemailId(e.target.value);
            }}
            focusText={true}
            validationText={emailError && emailId ? emailError : null}
          />
          <a className="forgot-text" href="/">
            Sign in to your account
          </a>
          <ButtonComp
            type={"sumbit"}
            disabled={!emailId}
            handleSubmit={handleResetPassword}
            text={"Reset Password"}
          />
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
