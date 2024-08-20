import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Organization() {
  const organizationName = useSelector((state) => state.organization.name);
  const organizationDescription = useSelector(
    (state) => state.organization.description
  );
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
            {Array(3)
              .fill()
              .map((_, index) => {
                return (
                  <div key={index} style={{ width: "400px" }}>
                    <div className="org-list">
                      <div className="org-profile">profile</div>
                      <div>
                        <p className="org-text">Softsuave Organization</p>
                        <p style={{ marginTop: "0px", fontWeight: "lighter" }}>
                          Super Admin
                        </p>
                        <p style={{ fontFamily: "sans-serif" }}>
                          Non adminstrative organization
                        </p>
                      </div>
                    </div>
                    <div className="edit-container">
                      <p className="edit-org">Edit</p>
                      <p className="edit-org">Delete</p>
                    </div>
                  </div>
                );
              })}
            {organizationName && (
              <div style={{ width: "400px" }}>
                <div className="org-list">
                  <div className="org-profile">profile</div>
                  <div>
                    <p className="org-text">{organizationName}</p>
                    <p style={{ marginTop: "0px", fontWeight: "lighter" }}>
                      User
                    </p>
                    <p style={{ fontFamily: "sans-serif" }}>
                      {organizationDescription}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    padding: "5px 5px 5px 5px",
                    width: "390px"
                  }}
                >
                  <p className="edit-org">Edit</p>
                  <p className="edit-org">Delete</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="administrative-border">
          <div className="administrative-inner">
            <p className="text-size">Non-Administrative Organizations</p>
          </div>
          <div className="org-container">
            <div style={{ width: "400px" }}>
              <div className="org-list">
                <div className="org-profile">profile</div>
                <div>
                  <p className="org-text">Demo Organization</p>
                  <p style={{ marginTop: "0px" }}>User</p>
                  <p style={{ fontFamily: "sans-serif" }}>
                    Non adminstrative organization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="administrative-border">
          <div className="administrative-inner">
            <p className="text-size">Pending Invitations</p>
          </div>
          <div className="org-container">
            <div className="invite-section"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organization;
