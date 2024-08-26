import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileUploadFile from "../UI/UploadFile";
import ButtonComp from "../UI/ButtonComp";
import { BackButton } from "../UI/ButtonComp";
import { useDispatch } from "react-redux";
import { setOrganization, setDescription } from "../redux/organizationSlice";
import { setSuccess } from "../redux/createOrgSuccessSlice";
import AlertBox from "../UI/AlertBox";

function CreateProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toast, setToast] = useState();
  const [message, setMessage] = useState();
  const [name, setName] = useState();
  const [description, setDescriptionValue] = useState();

  const handleBackButton = () => {
    navigate(-1);
  };

  const handleClose = () => {
    setToast(false);
  };

  const handleSubmit = () => {
    if (name && description) {
      dispatch(setOrganization(name));
      dispatch(setDescription(description));
      dispatch(setSuccess(true));
      navigate("/organizations", { state: { created: true } });
    } else {
      setToast(true);
      setMessage("Fill the mondatory fields");
    }
  };

  return (
    <>
      <BackButton handleClick={handleBackButton} />
      <div className="container">
        <div className="org-title">Organization Details</div>
        <div style={{ display: "flex", padding: "10px" }}>
          <div className="inner-div">
            <div
              style={{ width: "100%", marginTop: "3%", paddingBottom: "20px" }}
            >
              <label className="input-label-text">Organization Name *</label>
              <div>
                <input
                  className="input-field"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
            </div>
            <div
              style={{ width: "100%", marginTop: "3%", paddingBottom: "20px" }}
            >
              <label className="input-label-text">
                Organization Description *
              </label>
              <div>
                <textarea
                  className="textarea-field"
                  type="text"
                  value={description}
                  onChange={(e) => setDescriptionValue(e.target.value)}
                ></textarea>
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
          handleSubmit={handleSubmit}
          custumStyle={{ width: "45%", height: "46px", margin: "3% 5% 3% 30%" }}
          type={"sumbit"}
          text={"SUBMIT"}
        />
      </div>
      <AlertBox
        open={toast}
        duration={5000}
        handleClose={handleClose}
        severity={"error"}
        message={message}
      ></AlertBox>
    </>
  );
}

export default CreateProfile;
