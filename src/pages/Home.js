import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";

import Header from "../components/Header";
import SelectBar from "../components/SelectBar";
import NewAssetForm from "../components/NewAssetForm";
import SimpleTable from "../components/SimpleTable";

const defaultValue = [
  { tag: "car", name: "Car" },
  { tag: "driver", name: "Driver" },
  { tag: "team", name: "Team" },
  { tag: "event", name: "Event" },
];

function FormModal({ isOpen, setIsOpen, assetTag }) {
  const handleClose = () => setIsOpen(false);
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
      <DialogContent>
        <NewAssetForm currentAsset={assetTag} />
      </DialogContent>
    </Dialog>
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
                  valueArray={defaultValue}
                />
              </Grid>
              <Grid item xs={2} style={formStyle}>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={handleOpen}
                  disabled={!selectedAsset}
                >
                  Add asset
                </Button>
              </Grid>
            </Grid>
          </Box>
          <SimpleTable asset={selectedAsset} stateOfModal={isOpen} />
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

const StyledTableRow = styled(DialogTitle)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
