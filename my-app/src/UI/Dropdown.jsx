import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const names = ["Softsuave", "Organization-1", "Organization-2"];

export default function MultipleSelectPlaceholder() {
  const [personName, setPersonName] = React.useState([names[0]]);

  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <>
      <FormControl style={{ width: 200, marginTop: 0 }}>
        <Select
          displayEmpty
          value={personName}
          onChange={handleChange}
          renderValue={(selected) => selected.join(", ")}
          sx={{
            "& .MuiSvgIcon-root": {
              display: "none"
            }
          }}
        >
          {names.map((name, index) => (
            <MenuItem key={index} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
