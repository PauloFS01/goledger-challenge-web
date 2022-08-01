import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({
  description = "Asset",
  selectedAsset,
  setSelectedAsset,
}) {
  const handleChange = (event) => {
    setSelectedAsset(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{description}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedAsset}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"car"}>Car</MenuItem>
          <MenuItem value={"driver"}>Driver</MenuItem>
          <MenuItem value={"team"}>Team</MenuItem>
          <MenuItem value={"event"}>Event</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
