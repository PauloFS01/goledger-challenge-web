import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import Grid from "@mui/material/Grid";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import {
  mountCar,
  mountEvent,
  mountTeam,
  mountDriver,
} from "../hooks/mountAssets";
import { updateAsset, deleteAsset } from "../hooks/useRequest";

import SelectBar from "./SelectBar";

function convertIntoSelectData(data) {
  const asset = data.map((item) => {
    return {
      tag: item["@key"],
      name: item.name,
    };
  });
  return asset;
}

export default function UpdateAssetForm({
  currentAsset,
  formMode = "update",
  teams,
  drivers,
}) {
  const [loading, setLoading] = React.useState(false);

  const [name, setName] = React.useState(
    currentAsset.name || currentAsset.model
  );
  const [date, setDate] = React.useState(
    new Date(currentAsset.date) || new Date()
  );
  const [prize, setPrize] = React.useState(currentAsset.prize);
  const [team, setTeam] = React.useState(
    currentAsset.winner || currentAsset.team
  );
  const [driver, setDriver] = React.useState(currentAsset.driver);

  function handleClick() {
    sendUpdatedAsset();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  async function sendUpdatedAsset() {
    let asset = {};
    if (currentAsset.type === "event")
      asset = mountEvent({
        prize: prize,
        winner: team,
        key: currentAsset.key,
        date: date,
        name: name,
        mode: formMode,
      });

    if (currentAsset.type === "team")
      asset = mountTeam({ name: name, key: currentAsset.key, mode: formMode });

    if (currentAsset.type === "driver")
      asset = mountDriver({
        name: name,
        team: team,
        key: currentAsset.key,
        mode: formMode,
      });

    if (currentAsset.type === "car")
      asset = mountCar({
        model: name,
        driver: driver,
        key: currentAsset.key,
        mode: formMode,
      });

    if (formMode === "update") await updateAsset(asset);
    if (formMode === "delete") await deleteAsset(asset);
  }

  function isDisable() {
    return false;
  }

  return (
    <Box component="form" noValidate autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom component="div">
            {`You will ${formMode} this `}
            {currentAsset.type}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="outlined-basic"
            label={currentAsset.type === "car" ? "Model" : "Name"}
            variant="outlined"
            value={name}
            onChange={(event) => setName(event.target.value)}
            style={{ width: "100%" }}
            disabled={currentAsset.type === "event" || formMode === "delete"}
          />
        </Grid>
        {currentAsset.type === "event" && (
          <>
            <Grid item xs={4}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  label="Date desktop"
                  inputFormat="MM/dd/yyyy"
                  value={date}
                  onChange={(newValue) => setDate(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                  disabled
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="outlined-basic"
                label="Prize"
                variant="outlined"
                value={prize}
                onChange={(event) => setPrize(event.target.value)}
                style={{ width: "100%" }}
                disabled={formMode === "delete"}
              />
            </Grid>
          </>
        )}
        {(currentAsset.type === "driver" || currentAsset.type === "event") && (
          <Grid item xs={8}>
            <SelectBar
              description={currentAsset.type === "event" ? "Winner" : "Team"}
              selectedAsset={team}
              setSelectedAsset={setTeam}
              valueArray={convertIntoSelectData(teams)}
              isDisabled={formMode === "delete"}
            />
          </Grid>
        )}
        {currentAsset.type === "car" && (
          <Grid item xs={8}>
            <SelectBar
              description="Driver"
              selectedAsset={driver}
              setSelectedAsset={setDriver}
              valueArray={convertIntoSelectData(drivers)}
              isDisabled={formMode === "delete"}
            />
          </Grid>
        )}
        <Grid
          item
          xs={4}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {formMode === "update" && (
            <LoadingButton
              size="large"
              onClick={handleClick}
              endIcon={<SendIcon />}
              loading={loading}
              loadingPosition="end"
              variant="outlined"
              color="primary"
              disabled={isDisable()}
              style={{ width: "100%" }}
            >
              Send
            </LoadingButton>
          )}
          {formMode === "delete" && (
            <LoadingButton
              size="large"
              onClick={handleClick}
              endIcon={<DeleteSweepIcon />}
              loading={loading}
              loadingPosition="end"
              variant="outlined"
              color="error"
              disabled={isDisable()}
              style={{ width: "100%" }}
            >
              Delete
            </LoadingButton>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
