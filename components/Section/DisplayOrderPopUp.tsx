import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { DisplayOrderContext } from "@/contexts/muiComponentContext";
import DisplayOrder from "./DisplayOrder";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function DisplayOrderPopUp() {
  const { isDisplayOrderOpen, setIsDisplayOrderOpen } =
    useContext(DisplayOrderContext);
  const handleClose = () => setIsDisplayOrderOpen(false);

  return (
    <Modal
      open={isDisplayOrderOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <DisplayOrder />
    </Modal>
  );
}
