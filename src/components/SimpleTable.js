import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { styled } from "@mui/material/styles";

const carsResult = [
  {
    assetType: "car",
    key: "car:04bef002-17fb-5482-9b0d-413ae89a4730",
    lastTouchBy: "orgMSP",
    lastTx: "createAsset",
    driver: {
      assetType: "driver",
      key: "driver:bdd6698b-90c7-5820-be4e-398fcbe54322",
    },
    id: 18,
    model: "Diferent",
  },
  {
    assetType: "car",
    key: "car:25633c68-6995-555d-933f-6680e69d0d3e",
    lastTouchBy: "orgMSP",
    lastTx: "createAsset",
    driver: {
      assetType: "driver",
      key: "driver:1e45e6b9-2f21-5473-a8d5-d27066d74740",
    },
    id: 1549,
    model: "lepo",
  },
  {
    assetType: "car",
    key: "car:04bef002-17fb-5482-9b0d-413ae89a4730",
    lastTouchBy: "orgMSP",
    lastTx: "createAsset",
    driver: {
      assetType: "driver",
      key: "driver:bdd6698b-90c7-5820-be4e-398fcbe54322",
    },
    id: 32,
    model: "aother",
  },
  {
    assetType: "car",
    key: "car:25633c68-6995-555d-933f-6680e69d0d3e",
    lastTouchBy: "orgMSP",
    lastTx: "createAsset",
    driver: {
      assetType: "driver",
      key: "driver:1e45e6b9-2f21-5473-a8d5-d27066d74740",
    },
    id: 99,
    model: "lepo",
  },
];

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
    "@key": "team:fc9bd969-bd08-5df8-b371-8c854f103b6a",
    "@lastTouchBy": "orgMSP",
    "@lastTx": "createAsset",
    id: 98,
    name: "99 team",
  },
  {
    "@assetType": "team",
    "@key": "team:fc9bd969-bd08-5df8-b371-8c854f103b6a",
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
      "@key": "team:fc9bd969-bd08-5df8-b371-8c854f103b6a",
    },
  },
  {
    "@assetType": "driver",
    "@key": "driver:fc9bd969-bd08-5df8-b371-8c854f103b6a",
    "@lastTouchBy": "orgMSP",
    "@lastTx": "createAsset",
    id: 123,
    name: "Mariolo",
    team: {
      "@assetType": "team",
      "@key": "team:fc9bd969-bd08-5df8-b371-8c854f103b6a",
    },
  },
  {
    "@assetType": "driver",
    "@key": "driver:fc9bd969-bd08-5df8-b371-8c854f103b6a",
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
    "@key": "driver:fc9bd969-bd08-5df8-b371-8c854f103b6a",
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

const eventResult = [
  {
    "@assetType": "event",
    "@key": "event:1b92cadd-ee52-5b73-8720-699783216b7e",
    "@lastTouchBy": "orgMSP",
    "@lastTx": "createAsset",
    date: "2022-10-10T03:00:00Z",
    name: "Ghost Race",
    prize: 600,
    winner: {
      "@assetType": "team",
      "@key": "team:fc9bd969-bd08-5df8-b371-8c854f103b6a",
    },
  },
  {
    "@assetType": "event",
    "@key": "event:1b92cadd-ee52-5b73-8720-699783216b7e",
    "@lastTouchBy": "orgMSP",
    "@lastTx": "createAsset",
    date: "2022-10-10T03:00:00Z",
    name: "Ghost Race",
    prize: 700,
    winner: {
      "@assetType": "team",
      "@key": "team:fc9bd969-bd08-5df8-b371-8c854f103b6a",
    },
  },
  {
    "@assetType": "event",
    "@key": "event:1b92cadd-ee52-5b73-8720-699783216b7e",
    "@lastTouchBy": "orgMSP",
    "@lastTx": "createAsset",
    date: "2022-10-10T03:00:00Z",
    name: "Ghost Race",
    prize: 800,
    winner: {
      "@assetType": "team",
      "@key": "team:fc9bd969-bd08-5df8-b371-8c854f103b6a",
    },
  },
  {
    "@assetType": "event",
    "@key": "event:1b92cadd-ee52-5b73-8720-699783216b7e",
    "@lastTouchBy": "orgMSP",
    "@lastTx": "createAsset",
    date: "2022-10-10T03:00:00Z",
    name: "Ghost Race",
    prize: 1000,
    winner: {
      "@assetType": "team",
      "@key": "team:fc9bd969-bd08-5df8-b371-8c854f103b6a",
    },
  },
];

function createData(data) {
  const asset = data.map((item) => {
    return { type: "Car", id: item.id, model: item.model };
  });
  return asset;
}

function createDataTeam(data) {
  const asset = data.map((item) => {
    return { type: "Team", id: item.id, name: item.name };
  });
  return asset;
}

function createDataDriver(data) {
  const asset = data.map((item) => {
    return {
      type: "Driver",
      id: item.id,
      name: item.name,
      team: "seach here!",
    };
  });
  return asset;
}

function createDataEvent(data) {
  const asset = data.map((item) => {
    return {
      type: "Event",
      name: item.name,
      date: item.date,
      prize: item.prize,
    };
  });
  return asset;
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function CarTable({ assets }) {
  const rows = createData(carsResult);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <TableCell align="left">Type</TableCell>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Model</TableCell>
            <TableCell align="center">Actions</TableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{row.type}</TableCell>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.model}</TableCell>
              <TableCell align="center">
                <IconButton aria-label="edit" color="primary">
                  <BorderColorIcon />
                </IconButton>
                <IconButton aria-label="delete" style={{ color: "#ff4569" }}>
                  <DeleteForeverIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function TeamTable({ assets }) {
  const rows = createDataTeam(teamResult);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <TableCell align="left">Type</TableCell>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Actions</TableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{row.type}</TableCell>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">
                <IconButton aria-label="edit" color="primary">
                  <BorderColorIcon />
                </IconButton>
                <IconButton aria-label="delete" style={{ color: "#ff4569" }}>
                  <DeleteForeverIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function DriverTable({ assets }) {
  const rows = createDataDriver(driverResult);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <TableCell align="left">Type</TableCell>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Team</TableCell>
            <TableCell align="center">Actions</TableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{row.type}</TableCell>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.team}</TableCell>
              <TableCell align="center">
                <IconButton aria-label="edit" color="primary">
                  <BorderColorIcon />
                </IconButton>
                <IconButton aria-label="delete" style={{ color: "#ff4569" }}>
                  <DeleteForeverIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
function EventTable({ assets }) {
  const rows = createDataEvent(eventResult);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Prize</TableCell>
            <TableCell align="center">Actions</TableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.prize}</TableCell>
              <TableCell align="center">
                <IconButton aria-label="edit" color="primary">
                  <BorderColorIcon />
                </IconButton>
                <IconButton aria-label="delete" style={{ color: "#ff4569" }}>
                  <DeleteForeverIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default function BasicTable({ asset }) {
  if (asset === "car") return <CarTable />;
  if (asset === "team") return <TeamTable />;
  if (asset === "driver") return <DriverTable />;
  if (asset === "event") return <EventTable />;
}
