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

import { fetchAssets } from "../hooks/useRequest";

function createData(data) {
  const asset = data.map((item) => {
    return {
      key: item["@key"],
      type: "car",
      id: item.id,
      model: item.model || "No name",
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
      key: item["@key"],
      type: "driver",
      id: item.id,
      name: item.name,
      team: item.team["@key"] || "",
    };
  });
  return asset;
}

function createDataEvent(data) {
  const asset = data.map((item) => {
    return {
      type: "event",
      key: item["@key"],
      name: item.name,
      date: item.date,
      prize: item.prize,
      winner: item.winner["@key"],
    };
  });
  return asset;
}

function findeElementByKey(key, font) {
  if (font.length === 0) return;
  const driver = font
    .map((item) => item["@key"] === key && item.name)
    .filter((item) => item !== false && item);
  return driver[0];
}

function CarTable({ drivers, teams }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currenRow, setCurrentRow] = React.useState([]);
  const [formMode, setFormMode] = React.useState("update");
  const [fethedCars, setFethedCars] = React.useState();

  const handleOpen = (row) => {
    setCurrentRow(row);
    setIsOpen(true);
  };

  React.useEffect(() => {
    async function fetchMyAPI() {
      const result = await fetchAssets({
        query: {
          selector: {
            "@assetType": "car",
          },
        },
      });
      setFethedCars(result);
    }

    fetchMyAPI();
  }, []);

  React.useEffect(() => {
    async function fetchMyAPI() {
      const result = await fetchAssets({
        query: {
          selector: {
            "@assetType": "car",
          },
        },
      });
      setFethedCars(result);
    }

    fetchMyAPI();
  }, [isOpen]);

  const rows = createData(fethedCars || []);

  const TableRender = React.useCallback(() => {
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
                  {findeElementByKey(row.driver, drivers) || "not found"}
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
          <UpdateAssetForm
            currentAsset={currenRow}
            formMode={formMode}
            teams={teams}
            drivers={drivers}
          />
        </DialogComponent>
      </TableContainer>
    );
  }, [fethedCars]);

  return <TableRender />;
}

function TeamTable({ assets, teams }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currenRow, setCurrentRow] = React.useState({});
  const [formMode, setFormMode] = React.useState("update");
  const [fethedTeams, setFethedTeams] = React.useState(teams || []);

  const handleOpen = (row) => {
    setCurrentRow(row);
    setIsOpen(true);
  };

  React.useEffect(() => {
    async function fetchMyAPI() {
      const teamsResult = await fetchAssets({
        query: {
          selector: {
            "@assetType": "team",
          },
        },
      });
      setFethedTeams(teamsResult);
    }

    fetchMyAPI();
  }, [isOpen]);

  const rows = createDataTeam(fethedTeams);

  const TableRender = React.useCallback(() => {
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
  }, [fethedTeams]);

  return <TableRender />;
}

function DriverTable({ drivers, teams }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currenRow, setCurrentRow] = React.useState({});
  const [formMode, setFormMode] = React.useState("update");
  const [fethedDrivers, setFethedDrivers] = React.useState(drivers || []);

  const handleOpen = (row) => {
    setCurrentRow(row);
    setIsOpen(true);
  };

  React.useEffect(() => {
    async function fetchMyAPI() {
      const driversResult = await fetchAssets({
        query: {
          selector: {
            "@assetType": "driver",
          },
        },
      });
      setFethedDrivers(driversResult);
    }

    fetchMyAPI();
  }, [isOpen]);

  React.useEffect(() => console.log(fethedDrivers), [fethedDrivers]);

  const rows = createDataDriver(fethedDrivers);

  const TableRender = React.useCallback(() => {
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
                  {findeElementByKey(row.team, teams) || "Not found"}
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
          <UpdateAssetForm
            currentAsset={currenRow}
            formMode={formMode}
            teams={teams}
          />
        </DialogComponent>
      </TableContainer>
    );
  }, [fethedDrivers]);

  return <TableRender />;
}
function EventTable({ events, teams, drivers }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currenRow, setCurrentRow] = React.useState({});
  const [formMode, setFormMode] = React.useState("update");
  const [fethedEvents, setFethedEvents] = React.useState(events || []);

  const handleOpen = (row) => {
    setCurrentRow(row);
    setIsOpen(true);
  };

  React.useEffect(() => {
    async function fetchMyAPI() {
      const EventsResult = await fetchAssets({
        query: {
          selector: {
            "@assetType": "event",
          },
        },
      });
      setFethedEvents(EventsResult);
    }

    fetchMyAPI();
  }, [isOpen]);

  const rows = createDataEvent(fethedEvents);

  const TableRender = React.useCallback(() => {
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
          <UpdateAssetForm
            currentAsset={currenRow}
            formMode={formMode}
            teams={teams}
            drivers={drivers}
          />
        </DialogComponent>
      </TableContainer>
    );
  }, [fethedEvents]);

  return <TableRender />;
}

export default function BasicTable({ asset }) {
  const [fethedDrivers, setFethedDrivers] = React.useState([]);
  const [fethedTeams, setFethedTeams] = React.useState([]);
  const [fethedEvents, setFethedEvents] = React.useState([]);

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

  React.useEffect(() => {
    async function fetchMyAPI() {
      const EventsResult = await fetchAssets({
        query: {
          selector: {
            "@assetType": "event",
          },
        },
      });
      setFethedEvents(EventsResult);
    }

    fetchMyAPI();
  }, []);

  if (asset === "car") return <CarTable drivers={fethedDrivers} />;
  if (asset === "team") return <TeamTable teams={fethedTeams} />;
  if (asset === "driver")
    return <DriverTable drivers={fethedDrivers} teams={fethedTeams} />;
  if (asset === "event")
    return (
      <EventTable
        events={fethedEvents}
        teams={fethedTeams}
        drivers={fethedDrivers}
      />
    );
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
