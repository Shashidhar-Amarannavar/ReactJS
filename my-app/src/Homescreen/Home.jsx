import React from "react";
import logo from "../Images/softsuave_tech_logo.jpg";
import ButtonGroups from "./ButtonGroups";
import { useState } from "react";
import Organization from "./Organization";
import Activity from "./Activity";
import Projects from "./Projects";
import Tasks from "./Tasks";
import Reports from "./Reports";

const buttons = ["Organization", "Activity", "Projects", "Tasks", "Reports"];

const RenderComponents = ({ index }) => {
  switch (index) {
    case 0:
      return <Organization />;
    case 1:
      return <Activity />;
    case 2:
      return <Projects />;
    case 3:
      return <Tasks />;
    case 4:
      return <Reports />;
    default:
      return <Organization />;
  }
};

function Home() {

  const [isSelected, setSelected] = useState(0);
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div className="left-side-box">
        <div className="titlt-logo">
          <img src={logo} alt="No-Image" className="logo" />
          <p className="title">BUSTLESPOT</p>
        </div>
        <div className="button-continer">
          <ButtonGroups
            buttons={buttons}
            isSelected={isSelected}
            setSelected={setSelected}
          />
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
        <RenderComponents index={isSelected} />
      </div>
    </div>
  );
}

export default Home;
