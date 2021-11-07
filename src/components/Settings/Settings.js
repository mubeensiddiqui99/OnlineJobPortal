import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";

export default function Settings({ loggedIn }) {
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

  const content = loggedIn ? (
    <div>
      <h3>Settings</h3>
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
      </div>
    </div>
  ) : (
    <p>Log in please</p>
  );

  return <React.Fragment>{content}</React.Fragment>;
}
