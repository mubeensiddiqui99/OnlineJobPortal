import React, { useState, useEffect, useContext } from "react";
import { ProfileContext } from "../App";
import Axios from "axios";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useParams } from "react-router-dom";

const Input = styled("input")({
  display: "none",
});

export default function Resume({ jobs, user }) {
  let id = useParams();
  console.log(jobs);
  // id = parseInt(id);
  const [submitted, setSubmitted] = useState(false);
  const [profile, setprofile] = useContext(ProfileContext);
  console.log(profile);
  // console.log(jobs[i]d? - 1);
  // console.log(id - 1);
  // if (!jobs) return null;
  // if (!id) return null;

  // const {
  //   job_title,
  //   job_desc,
  //   job_company,
  //   job_date,
  //   job_salary,
  //   job_skills,
  //   job_no_of_positions,
  //   job_career_level,
  // } = jobs[0];
  const [resume, setresume] = useState({});
  const [inputs, setInputs] = useState({
    Summary: "",
    Job_ID: parseInt(id.id),
    Emp_ID: profile.id,
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  console.log(resume);
  useEffect(() => {
    console.log(id);
    Axios.post("http://localhost:3001/Resume", id)
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          setresume(response.data[0]);
          //  setjobs(response.data);
          console.log(resume);
          console.log(jobs);
        }
      })
      .catch((err) => {
        console.log(err);
        console.log("Wrong username /Password");
      });
  }, []);
  // console.log({ jobs });

  let content = "";
  const handleSubmit = (e) => {
    //process
    Axios.post("http://localhost:3001/submitResume", inputs)
      .then(() => {
        console.log("success");

        console.log(inputs);
        setSubmitted(true);
      })
      .catch((err) => {
        console.log("This is error", err);
      });
  };
  if (user === "employee" && !submitted) {
    content = (
      <React.Fragment>
        <h2>Your Application:</h2>
        <div>
          <TextField
            required
            label="Summary"
            value={inputs.Summary || ""}
            onChange={handleChange}
            name="Summary"
          />
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
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "10rem",
        marginLeft: 40,
      }}
    >
      {/* <h1>{job_company}</h1> */}
      <h2>{resume?.job_title}</h2>
      <h3>{resume?.job_date}</h3>
      <h3>Description:</h3>
      <p>{resume?.job_desc}</p>
      <h3>Salary: ${resume?.job_sal}</h3>
      <h3>Skills: </h3>
      <p>{resume?.job_skills}</p>
      <h3>No of Positions: {resume?.job_no_position}</h3>
      <h3>Career Level: {resume?.job_career_level}</h3>
      {content}
    </div>
  );
}
