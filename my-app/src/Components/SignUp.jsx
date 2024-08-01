import React from "react";
import Images from "../Images/Employee-Time-Tracking-1400-1024x557.jpg";

function SignUp() {
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
          <div style={{ width: "100%", marginTop: '0%'}}>
            <label className="label-text">Email ID</label>
            <div>
              <input type="text" className="input-fields" placeholder="Enter your email address"/>
            </div>
          </div>
          <div style={{ width: "100%", marginTop: '3%'}}>
            <label className="label-text">First name</label>
            <div>
              <input type="text" className="input-fields" placeholder="Enter your first name" />
            </div>
          </div>
          <div style={{ width: "100%", marginTop: '3%'}}>
            <label className="label-text">Last name</label>
            <div>
              <input type="text" className="input-fields" placeholder="Enter your last name" />
            </div>
          </div>
          <div style={{ width: "100%", marginTop: '3%'}}>
            <label className="label-text">Password</label>
            <div>
              <input type="text" className="input-fields" placeholder="Enter your password"/>
            </div>
          </div>
          <div style={{ width: "100%", marginTop: '3%', marginBottom: '4%'}}>
            <label className="label-text">Confirm Password</label>
            <div>
              <input type="text" className="input-fields" placeholder="Confirm password"/>
            </div>
          </div>
          <button className={"login-button"} type="submit">
            Login
          </button>
          <div>
            <p className="pargrap3">Don't have an account?</p>
          </div>
          <a
            className="signIn-link"
            href="https://github.com/Shashidhar-Amarannavar/ReactJS/tree/main/my-app"
          >
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
