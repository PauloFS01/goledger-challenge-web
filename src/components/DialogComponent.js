import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";

const StyledTableRow = styled(DialogTitle)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function DialogComponent({ isOpen, handleClose, children }) {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      maxWidth="md"
    >
      <StyledTableRow id="responsive-dialog-title">
        {"Create a new asset here"}
      </StyledTableRow>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
