import React from "react";

function Organization() {
  return (
    <div style={{ display: "flex" }}>
      <div className="right-side-box">
        <div className="administrative-border">
          <p className="text-size">Administrative Organizations</p>
          <p className="create-new-org">+ Create New Organization</p>
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
