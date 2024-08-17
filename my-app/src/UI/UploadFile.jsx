import React, { useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const UploadLogo = () => {
  const fileInputRef = useRef(null);

  const openFile = () => {
    fileInputRef.current.click();
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event?.target?.files[0];
    setSelectedFile(file);

    // Generate a preview of the image
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  return (
    <Box>
      <input
        ref={fileInputRef}
        accept="image/*"
        style={{ display: "none" }}
        id="upload-logo"
        type="file"
        onChange={handleFileChange}
      />

      {preview ? (
        <div className="preview-container">
          <img
            onClick={openFile}
            src={preview}
            alt="Selected logo"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      ) : (
        <label htmlFor="upload-logo">
          <CloudUploadIcon style={{ fontSize: 80, color: "#ccc" }} />
          <Typography variant="body1" color="textSecondary">
            {selectedFile ? selectedFile.name : "Upload Logo"}
          </Typography>
        </label>
      )}
    </Box>
  );
};

export default UploadLogo;
