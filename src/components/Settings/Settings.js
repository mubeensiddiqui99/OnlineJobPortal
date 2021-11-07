import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function Settings({ loggedIn, setProfile }) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
    age: "",
    lastSchool: "",
    lastQualification: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(inputs.age);
    // console.log({ inputs });
    setProfile((prev) => {
      return { ...prev, ...inputs };
    });
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
            type="number"
            id="outlined-required"
            label="Age"
            value={inputs.age || ""}
            onChange={handleChange}
            name="age"
          />
        </div>

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
          Update
        </Button>
      </Box>
    </div>
  ) : (
    <p>Log in please</p>
  );

  return <React.Fragment>{content}</React.Fragment>;
}
