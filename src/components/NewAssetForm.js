import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import Grid from "@mui/material/Grid";

import SelectBar from "../components/SelectBar";

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
    "@key": "team:fc9bd969-bd08-5df8-b371-8c854f103b6c",
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
      "@key": "team:fc9bd969-bd08-5df8-b371-8c854f103b6f",
    },
  },
  {
    "@assetType": "driver",
    "@key": "driver:fc9bd969-bd08-5df8-b371-8c854f103b6h",
    "@lastTouchBy": "orgMSP",
    "@lastTx": "createAsset",
    id: 125,
    name: "Maneco",
    team: {
      "@assetType": "team",
      "@key": "team:fc9bd969-bd08-5df8-b371-8c854f103b6i",
    },
  },
];

function convertTeamIntoSelectData(data) {
  const asset = data.map((item) => {
    return {
      tag: item["@key"],
      name: item.name,
    };
  });
  return asset;
}

// function convertDriverIntoSelectData(data) {
//     const asset = data.map((item) => {
//       return {
//         tag: item["@key"],
//         name: item.name,
//       };
//     });
//     return asset;
//   }

function FormNewCar() {
  const [loading, setLoading] = React.useState(false);
  const [selectedAsset, setSelectedAsset] = React.useState(null);
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  //   function handleClick() {
  //     setLoading(true);
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 2000);
  //   }
  function send() {
    const newEvent = {
      asset: [
        {
          "@assetType": "driver",
          driver: {
            "@assetType": "driver",
            "@key": selectedAsset,
          },
          id: Math.random() * 100,
          model: value,
        },
      ],
    };
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }
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
            New Car name:
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="outlined-basic"
            label="Model"
            variant="outlined"
            value={value}
            onChange={handleChange}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={8}>
          <SelectBar
            selectedAsset={selectedAsset}
            setSelectedAsset={setSelectedAsset}
            valueArray={convertTeamIntoSelectData(driverResult)}
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
            disabled={!value || !selectedAsset}
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
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  function handleClick() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }
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
            New Team
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={value}
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
            onClick={handleClick}
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            variant="outlined"
            color="primary"
            disabled={!value}
            style={{ width: "100%" }}
          >
            Send
          </LoadingButton>
        </Grid>
      </Grid>
    </Box>
  );
}

function FormNewEvent() {
  const [loading, setLoading] = React.useState(false);
  const [selectedAsset, setSelectedAsset] = React.useState("");
  const [name, setName] = React.useState("");
  const [prize, setPrize] = React.useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleChangePrize = (event) => {
    setPrize(event.target.value);
  };

  //   function handleClick() {
  //     setLoading(true);
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 2000);
  //   }

  function send() {
    const newEvent = {
      asset: [
        {
          "@assetType": "driver",
          winner: {
            "@assetType": "team",
            "@key": selectedAsset,
          },
          id: Math.random() * 100,
          name: name,
          prize: prize,
        },
      ],
    };
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

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
        <Grid item xs={8}>
          <SelectBar
            description="Winner"
            selectedAsset={selectedAsset}
            setSelectedAsset={setSelectedAsset}
            valueArray={convertTeamIntoSelectData(teamResult)}
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
            // loadingPosition="end"
            variant="outlined"
            color="primary"
            disabled={!name || !selectedAsset || !prize}
            style={{ width: "100%" }}
          >
            Send
          </LoadingButton>
        </Grid>
      </Grid>
    </Box>
  );
}

function FormNewDriver() {
  const [loading, setLoading] = React.useState(false);
  const [selectedAsset, setSelectedAsset] = React.useState("");
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  //   function handleClick() {
  //     setLoading(true);
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 2000);
  //   }

  function send() {
    const newDriver = {
      asset: [
        {
          "@assetType": "driver",
          team: {
            "@assetType": "team",
            "@key": selectedAsset,
          },
          id: Math.random() * 100,
          name: value,
        },
      ],
    };
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }
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
            New Driver:
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={value}
            onChange={handleChange}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={8}>
          <SelectBar
            description="Team"
            selectedAsset={selectedAsset}
            setSelectedAsset={setSelectedAsset}
            valueArray={convertTeamIntoSelectData(teamResult)}
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
            disabled={!value || !selectedAsset}
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
  switch (currentAsset) {
    case "car":
      return <FormNewCar />;
    case "team":
      return <FormNewTeam />;
    case "event":
      return <FormNewEvent />;
    case "driver":
      return <FormNewDriver />;
    default:
      return <FormNewDriver />;
  }
}
