import React from "react";
import { useNavigate } from "react-router-dom";




function Organization() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profile")
  }

  return (
    <div style={{ display: "flex" }}>
      <div className="right-side-box">
        <div className="administrative-border">
          <p className="text-size">Administrative Organizations</p>
          <p className="create-new-org" onClick={handleClick}>+ Create New Organization</p>
        </div>
        <div className="administrative-border">
          Non-Administrative Organizations
        </div>
        <div className="administrative-border">Pending Invitations</div>
      </div>
    </div>
  );
}

export default Organization;
