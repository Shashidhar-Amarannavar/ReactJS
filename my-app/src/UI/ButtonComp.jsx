import React, { useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function ButtonComp(props) {
  const { type, disabled, handleSubmit, text, custumStyle } = props;

  useEffect(() => {}, [disabled]);

  return (
    <button
      className="login-buttons"
      type={type}
      disabled={disabled}
      onClick={handleSubmit}
      style={custumStyle}
    >
      {text}
    </button>
  );
}

export const BackButton = (props) => {
  const {handleClick} = props;
  return (
    <>
      <button
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          width: "40px",
          height: "40px",
          margin: "15px",
          border: " 1px black",
          borderRadius: "20px",
          boxShadow: "0px 0px 2px"
        }}
        onClick={handleClick}
      >
        <ArrowBackIcon />
      </button>
    </>
  );
};

export default ButtonComp;
