import React, { useState, useEffect, useRef } from "react";
import logo from "../Images/softsuave_tech_logo.jpg";
import { Outlet, NavLink, useLocation, useNavigate } from "react-router-dom";
import AlertBox from "../UI/AlertBox";

const buttons = [
  {
    name: "Organizations",
    label: "/organizations"
  },
  {
    name: "Activity",
    label: "/activity"
  },

  {
    name: "Projects",
    label: "/projects"
  },

  {
    name: "Tasks",
    label: "/tasks"
  },

  {
    name: "Reports",
    label: "/reports"
  }
];

const handleStatus = () => {
  localStorage.setItem("loginStatus", false);
};

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const refValue = useRef(location.state?.key);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (refValue?.current) {
      setOpen(refValue.current);
      refValue.current = false;
    }
    return location !== buttons[0].label ? navigate(buttons[0].label) : null;
    // eslint-disable-next-line
  }, [refValue]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <AlertBox
        open={open}
        duration={5000}
        handleClose={handleClose}
        severity={"success"}
        message={"Successfully logged in."}
      ></AlertBox>
      <div className="left-side-box">
        <div className="titlt-logo">
          <img src={logo} alt="No-Image" className="logo" />
          <p className="title">BUSTLESPOT</p>
        </div>
        <div className="button-continer">
          {buttons.map((button, index) => (
            <nav key={index}>
              <NavLink
                to={button.label}
                className={
                  location.pathname === button.label
                    ? "side-button-orange"
                    : "side-button-grey"
                }
              >
                {button.name}
              </NavLink>
            </nav>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button className={"side-button-grey"}>Download</button>
          <a className="side-button-grey" href="/" onClick={handleStatus}>
            Logout
          </a>
        </div>
      </div>
      <div className="right-side-box">
        <div className="headers"></div>
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
