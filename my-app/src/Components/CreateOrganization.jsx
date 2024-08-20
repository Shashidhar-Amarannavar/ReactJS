import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileUploadFile from "../UI/UploadFile";
import ButtonComp from "../UI/ButtonComp";
import { BackButton } from "../UI/ButtonComp";
import { useDispatch, useSelector } from "react-redux";
import { setOrganization, setDescription } from "../redux/organizationSlice";

function CreateProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const organizationName = useSelector((state) => state.organization.name);
  const organizationDescription = useSelector(
    (state) => state.organization.description
  );
  const [name, setName] = useState(organizationName);
  const [description, setDescriptionValue] = useState(organizationDescription);

  const handleClick = () => {
    navigate(-1);
  };

  const handleSubmit = (e) => {
    dispatch(setOrganization(name));
    dispatch(setDescription(description));
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescriptionValue(e.target.value);
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
                <input
                  className="input-field"
                  type="text"
                  value={name}
                  onChange={handleNameChange}
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
                  onChange={handleDescriptionChange}
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
    </>
  );
}

export default CreateProfile;
