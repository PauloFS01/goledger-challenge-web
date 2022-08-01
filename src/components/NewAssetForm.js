import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import Grid from "@mui/material/Grid";

function FormNewCar() {
  const [loading, setLoading] = React.useState(false);

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
            New Car name:
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
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
            New Team name:
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
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
            New Event:
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
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
            New Driver:
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
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
