import { useState } from "react";
import Axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Signup({ setLoggedIn, loggedIn, setUser, setProfile }) {
  const history = useHistory();
  // console.log({ inputs });
  // if (inputs === undefined) {
  //   inputs = {};
  // }

  const [error, setError] = useState("");
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
    age: "",
    lastSchool: "",
    lastQualification: "",
    type: "",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log({ inputs });
    setProfile(inputs);
    setLoggedIn(true);
    setError("");
    setUser(inputs.type);
    // console.log(inputs.type);
    addUser();
    history.push("/portal");
  };
  const addUser = () => {
    console.log("inputs", inputs);
    Axios.post("http://localhost:3001/register", inputs).then(() => {
      console.log("success");
    });
  };

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
          type="number"
          id="outlined-required"
          label="Age"
          value={inputs.age || ""}
          onChange={handleChange}
          name="age"
        />
      </div>
      <FormControl fullWidth>
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
      </FormControl>
      <br />
      <TextField
        required
        id="outlined-required"
        label="Last School"
        value={inputs.lastSchool || ""}
        onChange={handleChange}
        name="lastSchool"
      />
      <TextField
        required
        id="outlined-required"
        label="Last Qualification"
        value={inputs.lastQualification || ""}
        onChange={handleChange}
        name="lastQualification"
      />
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
