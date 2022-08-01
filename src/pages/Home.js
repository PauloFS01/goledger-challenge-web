import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import Header from "../components/Header";
import StickyHeadTable from "../components/Table";
import SelectBar from "../components/SelectBar";
import NewAssetForm from "../components/NewAssetForm";
import SimpleTable from "../components/SimpleTable";

function FormModal({ isOpen, setIsOpen, assetTag }) {
  const handleClose = () => setIsOpen(false);
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <NewAssetForm currentAsset={assetTag} />
        </Typography>
      </Box>
    </Modal>
  );
}

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedAsset, setSelectedAsset] = React.useState("");
  const handleOpen = () => setIsOpen(true);

  return (
    <div>
      <Header />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: " center",
          paddingTop: 5,
          marginBottom: 10,
        }}
      >
        <Paper elevation={3} sx={{ padding: 5, minWidth: 1000 }}>
          <Box sx={{ flexGrow: 1 }} style={{ marginBottom: 30 }}>
            <Grid container spacing={2}>
              <Grid item xs={10}>
                <SelectBar
                  style={{ with: "100%" }}
                  selectedAsset={selectedAsset}
                  setSelectedAsset={setSelectedAsset}
                />
              </Grid>
              <Grid item xs={2} style={formStyle}>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={handleOpen}
                >
                  Add asset
                </Button>
              </Grid>
            </Grid>
          </Box>
          {/* </div> */}
          <SimpleTable asset={selectedAsset} />
        </Paper>
      </Box>
      {selectedAsset && (
        <FormModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          assetTag={selectedAsset}
        />
      )}
    </div>
  );
}

const formStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
