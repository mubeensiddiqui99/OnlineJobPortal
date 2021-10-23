import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useHistory } from "react-router";

const Input = styled("input")({
  display: "none",
});

export default function Resume({ title = "title", desc = "desc", user }) {
  const history = useHistory();
  const [submitted, setSubmitted] = useState(false);
  let content = "";
  const handleSubmit = (e) => {
    //process
    setSubmitted(true);
  };
  if (user === "employee" && !submitted) {
    content = (
      <React.Fragment>
        <h2>Your Application:</h2>
        <div>
          <TextField label="Summary" />
        </div>
        <div>
          <label htmlFor="contained-button-file">
            <Input id="contained-button-file" multiple type="file" />
            <Button variant="outlined" component="span">
              Upload Resume/CV
            </Button>
          </label>
          <br />
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </React.Fragment>
    );
  } else if (user === "employee") {
    content = <h2>Submitted..</h2>;
  } else if (user === "employer") {
    content = <h2>Candidates</h2>;
  } else {
    content = <h2>Please log in..</h2>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "10rem",
      }}
    >
      <h2>{title}</h2>
      <h3>{desc}</h3>
      {content}
    </div>
  );
}
