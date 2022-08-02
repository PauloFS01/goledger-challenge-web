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

import SelectBar from "./SelectBar";

const teamResult = [
  {
    "@assetType": "team",
    "@key": "team:fc9bd969-bd08-5df8-b371-8c854f103b6a",
    "@lastTouchBy": "orgMSP",
    "@lastTx": "createAsset",
    id: 99,
    name: "Anhanguera team",
  },
  {
    "@assetType": "team",
    "@key": "team:fc9bd969-bd08-5df8-b371-8c854f103b6b",
    "@lastTouchBy": "orgMSP",
    "@lastTx": "createAsset",
    id: 98,
    name: "99 team",
  },
  {
    "@assetType": "team",
    "@key": "team:fc9bd969-bd08-5df8-b371-8c854f103b6d",
    "@lastTouchBy": "orgMSP",
    "@lastTx": "createAsset",
    id: 123,
    name: "Piranhas team",
  },
];

const driverResult = [
  {
    "@assetType": "driver",
    "@key": "driver:fc9bd969-bd08-5df8-b371-8c854f103b6a",
    "@lastTouchBy": "orgMSP",
    "@lastTx": "createAsset",
    id: 100,
    name: "Ghost Rider",
    team: {
      "@assetType": "team",
      "@key": "team:fc9bd969-bd08-5df8-b371-8c854f103b6b",
    },
  },
  {
    "@assetType": "driver",
    "@key": "driver:fc9bd969-bd08-5df8-b371-8c854f103b6c",
    "@lastTouchBy": "orgMSP",
    "@lastTx": "createAsset",
    id: 123,
    name: "Mariolo",
    team: {
      "@assetType": "team",
      "@key": "team:fc9bd969-bd08-5df8-b371-8c854f103b6d",
    },
  },
  {
    "@assetType": "driver",
    "@key": "driver:fc9bd969-bd08-5df8-b371-8c854f103b6e",
    "@lastTouchBy": "orgMSP",
    "@lastTx": "createAsset",
    id: 124,
    name: "Joãosinho",
    team: {
      "@assetType": "team",
      "@key": "team:fc9bd969-bd08-5df8-b371-8c854f103b6a",
    },
  },
  {
    "@assetType": "driver",
    "@key": "driver:fc9bd969-bd08-5df8-b371-8c854f103b6g",
    "@lastTouchBy": "orgMSP",
    "@lastTx": "createAsset",
    id: 125,
    name: "Maneco",
    team: {
      "@assetType": "team",
      "@key": "team:fc9bd969-bd08-5df8-b371-8c854f103b6a",
    },
  },
];

function mountEvent(prize, winner, key) {
  return {
    update: {
      "@assetType": "event",
      "@key": key,
      prize: prize,
      winner: {
        "@assetType": "team",
        "@key": winner,
      },
    },
  };
}

function mountTeam(name, key) {
  return {
    update: {
      "@assetType": "event",
      "@key": key,
      name: name,
    },
  };
}

function mountDriver(name, team, key) {
  return {
    update: {
      "@assetType": "driver",
      "@key": key,
      name: name,
      team: {
        "@assetType": "team",
        "@key": team,
      },
    },
  };
}

function mountCar(model, driver, key) {
  return {
    update: {
      "@assetType": "driver",
      "@key": key,
      model: model,
      driver: {
        "@assetType": "driver",
        "@key": driver,
      },
    },
  };
}

function convertIntoSelectData(data) {
  const asset = data.map((item) => {
    return {
      tag: item["@key"],
      name: item.name,
    };
  });
  return asset;
}

export default function UpdateAssetForm({ currentAsset, formMode = "update" }) {
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

  function sendUpdatedAsset() {
    let asset = {};
    if (currentAsset.type === "event")
      asset = mountEvent(prize, team, currentAsset.type);

    if (currentAsset.type === "team") asset = mountTeam(name, currentAsset.key);

    if (currentAsset.type === "driver")
      asset = mountDriver(name, team, currentAsset.key);

    if (currentAsset.type === "car")
      asset = mountCar(name, team, currentAsset.key);

    if (formMode === "update")
      console.log(`sending asset key: ${asset.update["@key"]}`);
    if (formMode === "delete")
      console.log(`deleting asset key: ${asset.update["@key"]}`);
  }

  function isDisable() {
    return false;
  }

  //   const handleChange = (newValue) => {
  //     setDate(newValue);
  //   };

  return (
    <Box
      component="form"
      //   sx={{
      //     "& > :not(style)": { m: 1, width: "500ch" },
      //   }}
      noValidate
      autoComplete="off"
    >
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
              valueArray={convertIntoSelectData(teamResult)}
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
              valueArray={convertIntoSelectData(driverResult)}
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
          {formMode == "delete" && (
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
