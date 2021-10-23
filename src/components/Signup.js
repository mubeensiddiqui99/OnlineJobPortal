import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Signup({ setLoggedIn, loggedIn, setUser }) {
  const history = useHistory();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
    type: "",
  });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoggedIn(true);
    setError("");
    setUser(inputs.type);
    // console.log(inputs.type);
    history.push("/portal");
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
      noValidate
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
          id="outlined-required"
          label="Name"
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

      <Button
        style={{ marginTop: "3rem" }}
        variant="contained"
        onClick={handleSubmit}
      >
        Login
      </Button>
      <p>{error}</p>
    </Box>
  );
}
