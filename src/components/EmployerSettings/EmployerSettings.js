import React from "react";
import { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { ListItem } from "@mui/material";
import List from "@mui/material/List";
import { ProfileContext, LoggedInContext } from "../../App";
import { useHistory } from "react-router";
export default function EmployerSettings() {
  const loggedIn = useContext(LoggedInContext);
  const [profile, setProfile] = useContext(ProfileContext);
  const history = useHistory();
  const [inputs, setInputs] = useState({
    email: profile.email,
    password: profile.password,
    name: profile.name,
    sector: profile.sector,
    departments: profile.departments,
    locations: profile.locations,
  });
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  const handleDepartment = (e) => {
    setDepartment(e.target.value);
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const addLocation = () => {
    const locations = inputs.locations;
    const locationsClone = [...locations, location];

    setInputs((prev) => {
      return { ...prev, locations: locationsClone };
    });
  };
  const addDepartment = () => {
    const departments = inputs.departments;
    const departmentsClone = [...departments, department];
    setInputs((prev) => {
      return { ...prev, departments: departmentsClone };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(inputs.age);
    // console.log({ inputs });
    setProfile((prev) => {
      return { ...prev, ...inputs };
    });
    history.push("/");
  };

  const content = loggedIn ? (
    <div>
      <h3>Settings</h3>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { width: "100%", paddingBottom: "1rem" },
          m: "auto",
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        // noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <TextField
            required
            id="outlined-required"
            label="Email"
            value={inputs.email || ""}
            onChange={handleChange}
            name="email"
          />
          <br />

          <TextField
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={inputs.password || ""}
            onChange={handleChange}
            name="password"
          />
          <br />
          <TextField
            required
            id="outlined-required"
            label="Name"
            value={inputs.name || ""}
            onChange={handleChange}
            name="name"
          />
          <br />
          <TextField
            required
            id="outlined-required"
            label="Sector"
            value={inputs.sector || ""}
            onChange={handleChange}
            name="sector"
          />
        </div>
        {/* <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">User Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={inputs.type}
          label="User Type"
          name="type"
          onChange={handleChange}
        >
          <MenuItem value={"employer"}>Employer</MenuItem>
          <MenuItem value={"employee"}>Employee</MenuItem>
        </Select>
      </FormControl> */}
        <br />
        <TextField
          required
          id="outlined-required"
          label="Add Department"
          value={department || ""}
          onChange={handleDepartment}
          name="department"
        />
        <List>
          {inputs.departments &&
            inputs.departments.map((department, i) => {
              return <ListItem key={i}>{department}</ListItem>;
            })}
        </List>
        <Button onClick={addDepartment}>Add</Button>
        <TextField
          required
          id="outlined-required"
          label="Add Location"
          value={location || ""}
          onChange={handleLocation}
          name="location"
        />
        <List>
          {inputs.locations &&
            inputs.locations.map((location, i) => {
              return <ListItem key={i}>{location}</ListItem>;
            })}
        </List>
        <Button onClick={addLocation}>Add</Button>

        <Button
          style={{ marginTop: "3rem" }}
          variant="contained"
          onClick={handleSubmit}
        >
          Update
        </Button>
      </Box>
    </div>
  ) : (
    <p>Log in please</p>
  );

  return <React.Fragment>{content}</React.Fragment>;
}
