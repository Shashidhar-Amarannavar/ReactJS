import React from "react";
import { useNavigate } from "react-router-dom";
import FileUploadFile from "../UI/UploadFile";
import ButtonComp from "../UI/ButtonComp";
import { BackButton } from "../UI/ButtonComp";

function CreateProfile() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      <BackButton handleClick={handleClick} />
      <div className="container">
        <div className="org-title">Organization Details</div>
        <div style={{ display: "flex", padding: "10px" }}>
          <div className="inner-div">
            <div
              style={{ width: "100%", marginTop: "3%", paddingBottom: "20px" }}
            >
              <label className="input-label-text">Organization Name *</label>
              <div>
                <input className="input-field" type="text"></input>
              </div>
            </div>
            <div
              style={{ width: "100%", marginTop: "3%", paddingBottom: "20px" }}
            >
              <label className="input-label-text">
                Organization Description *
              </label>
              <div>
                <textarea className="textarea-field" type="text"></textarea>
              </div>
            </div>
          </div>
          <div className="inner-div">
            <label className="input-label-text">Organization Logo *</label>
            <div className="upload-container">
              <FileUploadFile></FileUploadFile>
            </div>
          </div>
        </div>
        <ButtonComp
          custumStyle={{ width: "45%", height: "46px", margin: "3% 5% 3% 30%" }}
          type={"sumbit"}
          text={"SUBMIT"}
        />
      </div>
    </>
  );
}

export default CreateProfile;
