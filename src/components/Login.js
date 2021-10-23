import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

const employee = {
  email: "employee", //not email but here
  password: "pass",
};

const employer = {
  email: "employer",
  password: "pass",
};

export default function Login({ setLoggedIn, loggedIn, setUser }) {
  const history = useHistory();
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputs.email === "employee" && inputs.password === "pass") {
      setLoggedIn(true);
      setError("");
      setUser("employee");
      history.push("/jobs");
    } else if (inputs.email === "employer" && inputs.password === "pass") {
      setLoggedIn(true);
      setError("");
      setUser("employer");
      history.push("/portal");
    } else {
      setError("Incorrect email or password");
    }
  };

  if (loggedIn) {
    return <div>Already logged in ..</div>;
  }
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 4, width: "50%" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
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
      </div>
      <Button variant="contained" onClick={handleSubmit}>
        Login
      </Button>
      <p>{error}</p>
    </Box>
  );
}
