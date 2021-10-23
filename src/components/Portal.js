import { TextareaAutosize } from "@mui/material";
import React from "react";
import Jobs from "./Jobs/Jobs";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";

export default function Portal({ user, loggedIn, setJobs, jobs }) {
  const history = useHistory();
  const [inputs, setinputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setinputs((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    setJobs((jobs) => [
      ...jobs,
      {
        title: inputs.title,
        desc: inputs.desc,
      },
    ]);
    history.push("/jobs");
  };
  //   console.log(loggedIn);
  if (user === "employer") {
    return (
      <div>
        <h2>Portal</h2>
        <h3>Add Job</h3>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { width: "100%", m: 4 },
            width: "50%",
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div>
            <TextField
              required
              label="Title"
              value={inputs.title || ""}
              onChange={handleChange}
              name="title"
            />
            <br />
            <TextareaAutosize
              required
              label="Description"
              value={inputs.desc || ""}
              onChange={handleChange}
              name="desc"
            />
          </div>

          <Button variant="contained" onClick={handleSubmit}>
            Add
          </Button>
        </Box>
      </div>
    );
  }
  return <Jobs loggedIn={loggedIn} jobs={jobs} />;
}
