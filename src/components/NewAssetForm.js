import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import Grid from "@mui/material/Grid";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import SelectBar from "../components/SelectBar";

import { fetchAssets, createAsset } from "../hooks/useRequest";

import {
  mountEvent,
  mountTeam,
  mountDriver,
  mountCar,
} from "../hooks/mountAssets";

function convertIntoSelectData(data) {
  const asset = data.map((item) => {
    return {
      tag: item["@key"],
      name: item.name,
    };
  });
  return asset;
}

function FormNewCar({ drivers }) {
  const [loading, setLoading] = React.useState(false);
  const [driver, setSelectedDriver] = React.useState("");
  const [model, setModel] = React.useState("");

  const handleChange = (event) => {
    setModel(event.target.value);
  };
  async function send() {
    const newCar = mountCar({
      model: model,
      driver: driver,
      key: null,
      mode: "create",
    });
    await createAsset(newCar);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setModel("");
    }, 2000);
  }
  return (
    <Box component="form" noValidate autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom component="div">
            New Car name:
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="outlined-basic"
            label="Model"
            variant="outlined"
            value={model}
            onChange={handleChange}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={8}>
          <SelectBar
            description="Driver"
            selectedAsset={driver}
            setSelectedAsset={setSelectedDriver}
            valueArray={convertIntoSelectData(drivers)}
          />
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <LoadingButton
            size="large"
            onClick={send}
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            variant="outlined"
            color="primary"
            disabled={!model || !driver}
            style={{ width: "100%" }}
          >
            Send
          </LoadingButton>
        </Grid>
      </Grid>
    </Box>
  );
}

function FormNewTeam() {
  const [loading, setLoading] = React.useState(false);
  const [name, setName] = React.useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };
  async function send() {
    const newTeam = mountTeam({ name: name, key: null, mode: "create" });
    await createAsset(newTeam);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }
  return (
    <Box component="form" noValidate autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom component="div">
            New Team
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={name}
            onChange={handleChange}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <LoadingButton
            size="large"
            onClick={send}
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            variant="outlined"
            color="primary"
            disabled={!name}
            style={{ width: "100%" }}
          >
            Send
          </LoadingButton>
        </Grid>
      </Grid>
    </Box>
  );
}

function FormNewEvent({ teams }) {
  const [loading, setLoading] = React.useState(false);
  const [winner, setSelectedWinner] = React.useState("");
  const [name, setName] = React.useState("");
  const [prize, setPrize] = React.useState("");
  const [date, setDate] = React.useState(new Date());

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleChangePrize = (event) => {
    setPrize(event.target.value);
  };

  async function send() {
    const newEvent = mountEvent({
      prize: prize,
      winner: winner,
      key: null,
      date: date,
      name: name,
      mode: "create",
    });
    await createAsset(newEvent);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <Box component="form" noValidate autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom component="div">
            New Event:
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            style={{ width: "100%" }}
            id="outlined-multiline-flexible"
            label="Name"
            variant="outlined"
            value={name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            style={{ width: "100%" }}
            id="outlined-multiline-flexible"
            label="Prize"
            variant="outlined"
            value={prize}
            onChange={handleChangePrize}
          />
        </Grid>
        <Grid item xs={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Date desktop"
              // inputFormat="MM/dd/yyyy"
              value={date}
              onChange={(newValue) => setDate(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={8}>
          <SelectBar
            description="Winner"
            selectedAsset={winner}
            setSelectedAsset={setSelectedWinner}
            valueArray={convertIntoSelectData(teams)}
          />
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <LoadingButton
            size="large"
            onClick={send}
            endIcon={<SendIcon />}
            loading={loading}
            variant="outlined"
            color="primary"
            disabled={!name || !winner || !prize}
            style={{ width: "100%" }}
          >
            Send
          </LoadingButton>
        </Grid>
      </Grid>
    </Box>
  );
}

function FormNewDriver({ teams }) {
  const [loading, setLoading] = React.useState(false);
  const [team, setSelectedTeam] = React.useState("");
  const [driver, setDriver] = React.useState("");

  const handleChange = (event) => {
    setDriver(event.target.value);
  };

  async function send() {
    const newDriver = mountDriver({
      name: driver,
      team: team,
      key: null,
      mode: "create",
    });
    await createAsset(newDriver);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDriver("");
    }, 2000);
  }
  return (
    <Box component="form" noValidate autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom component="div">
            New Driver:
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={driver}
            onChange={handleChange}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={8}>
          <SelectBar
            description="Team"
            selectedAsset={team}
            setSelectedAsset={setSelectedTeam}
            valueArray={convertIntoSelectData(teams)}
          />
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <LoadingButton
            size="large"
            onClick={send}
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            variant="outlined"
            color="primary"
            disabled={!driver || !setSelectedTeam}
            style={{ width: "100%" }}
          >
            Send
          </LoadingButton>
        </Grid>
      </Grid>
    </Box>
  );
}

export default function NewAssetForm({ currentAsset }) {
  const [fethedDrivers, setFethedDrivers] = React.useState([]);
  const [fethedTeams, setFethedTeams] = React.useState([]);

  React.useEffect(() => {
    async function fetchMyAPI() {
      const DriversResult = await fetchAssets({
        query: {
          selector: {
            "@assetType": "driver",
          },
        },
      });
      setFethedDrivers(DriversResult);
    }

    fetchMyAPI();
  }, []);

  React.useEffect(() => {
    async function fetchMyAPI() {
      const TeamsResult = await fetchAssets({
        query: {
          selector: {
            "@assetType": "team",
          },
        },
      });
      setFethedTeams(TeamsResult);
    }

    fetchMyAPI();
  }, []);

  switch (currentAsset) {
    case "car":
      return <FormNewCar drivers={fethedDrivers} />;
    case "team":
      return <FormNewTeam />;
    case "event":
      return <FormNewEvent teams={fethedTeams} />;
    case "driver":
      return <FormNewDriver teams={fethedTeams} />;
    default:
      return <FormNewDriver />;
  }
}
