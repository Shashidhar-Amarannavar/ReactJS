import React, { useEffect } from "react";
import logo from "../Images/softsuave_tech_logo.jpg";
import { Outlet, NavLink, useLocation, useNavigate } from "react-router-dom";

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

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    return location !== buttons[0].label ? navigate(buttons[0].label) : null;
  }, []);

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div className="left-side-box">
        <div className="titlt-logo">
          <img src={logo} alt="No-Image" className="logo" />
          <p className="title">BUSTLESPOT</p>
        </div>
        <div className="button-continer">
          {buttons.map((button) => (
            <nav>
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
          <a className="side-button-grey" href="/">
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
