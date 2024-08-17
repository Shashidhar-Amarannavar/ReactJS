import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  p: 40
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <p className="create-new-org" onClick={handleOpen}>
        + Create New Organization
      </p>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <div className='modal-container'></div>
        </Box>
      </Modal>
    </div>
  );
}
