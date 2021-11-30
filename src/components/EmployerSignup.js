import { useState, useContext } from "react";
import Axios from "axios";
import { ListItem } from "@mui/material";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { LoggedInContext, ProfileContext, UserContext } from "../App";

export default function Signup() {
  const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
  const [user, setUser] = useContext(UserContext);
  const [profile, setProfile] = useContext(ProfileContext);
  const history = useHistory();
  // console.log({ inputs });
  // if (inputs === undefined) {
  //   inputs = {};
  // }

  const [error, setError] = useState("");
  const [inputs, setInputs] = useState({
    comp_email: "",
    comp_password: "",
    comp_name: "",
    comp_sector: "",
    // departments: [],
    comp_location: "",
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
    console.log({ inputs });

    Axios.post("http://localhost:3001/company_registration", inputs).then(
      () => {
        console.log("success");
        console.log({ inputs });
        setProfile(inputs);
        setLoggedIn(true);
        setError("");
        setUser("employer");
        history.push("/portal");
      }
    );

    // console.log(inputs.type);
    // addUser();
  };
  // const addUser = () => {
  //   console.log("inputs", inputs);
  //   Axios.post("http://localhost:3001/company_registration", inputs).then(
  //     () => {
  //       console.log("success");
  //     }
  //   );
  // };

  if (loggedIn) {
    return <div>Already logged in ..</div>;
  }
  return (
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
          value={inputs.comp_email || ""}
          onChange={handleChange}
          name="comp_email"
        />
        <br />

        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={inputs.comp_password || ""}
          onChange={handleChange}
          name="comp_password"
        />
        <br />
        <TextField
          required
          id="outlined-required"
          label="Name"
          value={inputs.comp_name || ""}
          onChange={handleChange}
          name="comp_name"
        />
        <br />
        <TextField
          required
          id="outlined-required"
          label="Sector"
          value={inputs.comp_sector || ""}
          onChange={handleChange}
          name="comp_sector"
        />
        <br />
        <TextField
          required
          id="outlined-required"
          label="Location"
          value={inputs.comp_location || ""}
          onChange={handleChange}
          name="comp_location"
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
      {/* <TextField
        required
        id="outlined-required"
        label="Add Department"
        value={department || ""}
        onChange={handleDepartment}
        name="department"
      /> */}
      {/* <List>
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
      /> */}
      {/* <List>
        {inputs.locations &&
          inputs.locations.map((location, i) => {
            return <ListItem key={i}>{location}</ListItem>;
          })}
      </List>
      <Button onClick={addLocation}>Add</Button> */}

      <Button
        style={{ marginTop: "3rem" }}
        variant="contained"
        onClick={handleSubmit}
      >
        Sign Up
      </Button>
      <p>{error}</p>
    </Box>
  );
}
