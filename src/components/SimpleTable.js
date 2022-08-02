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

import UpdateAssetForm from "./UpdateAssetForm";
import DialogComponent from "./DialogComponent";
import formatDate from "../utils/dateFormat";

const carsResult = [
  {
    "@assetType": "car",
    "@key": "car:04bef002-17fb-5482-9b0d-413ae89a4730",
    "@lastTouchBy": "orgMSP",
    "@lastTx": "createAsset",
    driver: {
      "@assetType": "driver",
      "@key": "driver:fc9bd969-bd08-5df8-b371-8c854f103b6a",
    },
    id: 18,
    model: "Diferent",
  },
  {
    "@assetType": "car",
    "@key": "car:25633c68-6995-555d-933f-6680e69d0d3e",
    "@lastTouchBy": "orgMSP",
    "@lastTx": "createAsset",
    driver: {
      assetType: "driver",
      "@key": "driver:fc9bd969-bd08-5df8-b371-8c854f103b6c",
    },
    id: 1549,
    model: "lepo",
  },
  {
    "@assetType": "car",
    "@key": "car:04bef002-17fb-5482-9b0d-413ae89a4731",
    "@lastTouchBy": "orgMSP",
    "@lastTx": "createAsset",
    driver: {
      assetType: "driver",
      "@key": "driver:fc9bd969-bd08-5df8-b371-8c854f103b6c",
    },
    id: 32,
    model: "aother",
  },
  {
    "@assetType": "car",
    "@key": "car:25633c68-6995-555d-933f-6680e69d0d3u",
    "@lastTouchBy": "orgMSP",
    "@lastTx": "createAsset",
    driver: {
      assetType: "driver",
      "@key": "driver:fc9bd969-bd08-5df8-b371-8c854f103b6g",
    },
    id: 99,
    model: "junipero",
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
    return {
      key: item["@key"],
      type: "car",
      id: item.id,
      model: item.model,
      driver: item.driver["@key"],
    };
  });
  return asset;
}

function createDataTeam(data) {
  const asset = data.map((item) => {
    return { type: "team", id: item.id, name: item.name, key: item["@key"] };
  });
  return asset;
}

function createDataDriver(data) {
  const asset = data.map((item) => {
    return {
      type: "driver",
      id: item.id,
      name: item.name,
      team: item.team["@key"],
    };
  });
  return asset;
}

function createDataEvent(data) {
  const asset = data.map((item) => {
    return {
      type: "event",
      name: item.name,
      date: item.date,
      prize: item.prize,
      winner: item.winner["@key"],
    };
  });
  return asset;
}

function findeElementByKey(key, font) {
  const name = font.map((item) => {
    if (item["@key"] === key) return item.name;
  });
  return name;
}

function CarTable({ assets }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currenRow, setCurrentRow] = React.useState({});
  const [formMode, setFormMode] = React.useState("update");
  const handleOpen = (row) => {
    setCurrentRow(row);
    setIsOpen(true);
  };
  const rows = createData(carsResult);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <TableCell align="left">Type</TableCell>
            <TableCell align="center">Driver</TableCell>
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
              <TableCell align="center">
                {findeElementByKey(row.driver, driverResult)}
              </TableCell>
              <TableCell align="center">{row.model}</TableCell>
              <TableCell align="center">
                <IconButton aria-label="edit" color="primary">
                  <BorderColorIcon
                    onClick={() => {
                      setFormMode("update");
                      handleOpen(row);
                    }}
                  />
                </IconButton>
                <IconButton aria-label="delete" style={{ color: "#ff4569" }}>
                  <DeleteForeverIcon
                    onClick={() => {
                      setFormMode("delete");
                      handleOpen(row);
                    }}
                  />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <DialogComponent
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Change Cars"
      >
        <UpdateAssetForm currentAsset={currenRow} formMode={formMode} />
      </DialogComponent>
    </TableContainer>
  );
}

function TeamTable({ assets }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currenRow, setCurrentRow] = React.useState({});
  const [formMode, setFormMode] = React.useState("update");
  const handleOpen = (row) => {
    setCurrentRow(row);
    setIsOpen(true);
  };
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
                  <BorderColorIcon
                    onClick={() => {
                      setFormMode("update");
                      handleOpen(row);
                    }}
                  />
                </IconButton>
                <IconButton aria-label="delete" style={{ color: "#ff4569" }}>
                  <DeleteForeverIcon
                    onClick={() => {
                      setFormMode("delete");
                      handleOpen(row);
                    }}
                  />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <DialogComponent
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Change Team"
      >
        <UpdateAssetForm currentAsset={currenRow} formMode={formMode} />
      </DialogComponent>
    </TableContainer>
  );
}

function DriverTable({ assets }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currenRow, setCurrentRow] = React.useState({});
  const [formMode, setFormMode] = React.useState("update");
  const handleOpen = (row) => {
    setCurrentRow(row);
    setIsOpen(true);
  };

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
              <TableCell align="center">
                {findeElementByKey(row.team, teamResult)}
              </TableCell>
              <TableCell align="center">
                <IconButton aria-label="edit" color="primary">
                  <BorderColorIcon
                    onClick={() => {
                      setFormMode("update");
                      handleOpen(row);
                    }}
                  />
                </IconButton>
                <IconButton aria-label="delete" style={{ color: "#ff4569" }}>
                  <DeleteForeverIcon
                    onClick={() => {
                      setFormMode("delete");
                      handleOpen(row);
                    }}
                  />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <DialogComponent
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Change Driver"
      >
        <UpdateAssetForm currentAsset={currenRow} formMode={formMode} />
      </DialogComponent>
    </TableContainer>
  );
}
function EventTable({ assets }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currenRow, setCurrentRow] = React.useState({});
  const [formMode, setFormMode] = React.useState("update");
  const handleOpen = (row) => {
    setCurrentRow(row);
    setIsOpen(true);
  };

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
              <TableCell align="center">
                {formatDate(new Date(row.date))}
              </TableCell>
              <TableCell align="center">{row.prize}</TableCell>
              <TableCell align="center">
                <IconButton
                  aria-label="edit"
                  color="primary"
                  onClick={() => handleOpen(row)}
                >
                  <BorderColorIcon
                    onClick={() => {
                      setFormMode("update");
                      handleOpen(row);
                    }}
                  />
                </IconButton>
                <IconButton aria-label="delete" style={{ color: "#ff4569" }}>
                  <DeleteForeverIcon
                    onClick={() => {
                      setFormMode("delete");
                      handleOpen(row);
                    }}
                  />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <DialogComponent
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Change Event"
      >
        <UpdateAssetForm currentAsset={currenRow} formMode={formMode} />
      </DialogComponent>
    </TableContainer>
  );
}

export default function BasicTable({ asset }) {
  if (asset === "car") return <CarTable />;
  if (asset === "team") return <TeamTable />;
  if (asset === "driver") return <DriverTable />;
  if (asset === "event") return <EventTable />;
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
