import React from "react";
import { useNavigate } from "react-router-dom";

function Organization() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profile");
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="right-side-box">
        <div className="administrative-border">
          <div className="administrative-inner">
            <p className="text-size">Administrative Organizations</p>
            <p className="create-new-org" onClick={handleClick}>
              + Create New Organization
            </p>
          </div>
          <div className="org-container">
            <div className="org-list">
              <div className="org-profile">profile</div>
              <div>
                <p className="org-text">Softsuave Organization</p>
                <p style={{ marginTop: "0px" }}>Super Admin</p>
                <p style={{ fontFamily: "sans-serif" }}>Description</p>
              </div>
            </div>
          </div>
        </div>
        <div className="administrative-border">
          <div className="administrative-inner">
            <p className="text-size">Non-Administrative Organizations</p>
          </div>
          <div className="org-container">
            <div className="org-list">
              <div className="org-profile">profile</div>
              <div>
                <p className="org-text">Softsuave Organization</p>
                <p style={{ marginTop: "0px" }}>User</p>
                <p style={{ fontFamily: "sans-serif" }}>Description</p>
              </div>
            </div>
          </div>
        </div>
        <div className="administrative-border">Pending Invitations</div>
      </div>
    </div>
  );
}

export default Organization;
