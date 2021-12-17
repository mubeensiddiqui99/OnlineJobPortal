import React, { Fragment, useEffect, useState, useContext } from "react";
import CardWrapper from "../Card/Card";
import "./style.css";
import { withRouter } from "react-router";
import Axios from "axios";
import { ProfileContext } from "../../App";
// const sample_jobs = [
//   {
//     job_id: 1,
//     job_title: "senior software engineer",
//     job_desc: "Want talented engineer",
//     job_skills: "html,css",
//     job_no_of_positions: 2,
//     job_date: new Date(), //post date,
//     job_salary: 1000,
//     job_years_of_experience: 2,
//     job_career_level: "Experienced Professional",
//     job_company: "AICompany",
//   },
//   {
//     job_id: 2,
//     job_title: "junior software engineer",
//     job_desc: "Want talented engineer",
//     job_skills: "html,css",
//     job_no_of_positions: 2,
//     job_date: new Date(), //post date,
//     job_salary: 1000,
//     job_years_of_experience: 2,
//     job_career_level: "Entry Level",
//     job_company: "AICompany",
//   },
// ];
function Jobs({ loggedIn, user, location }) {
  // console.log(jobs);
  // if (!loggedIn) {
  //   return <div>Please log in..</div>;
  // }
  const search = location.search; // could be '?foo=bar'
  const [profile, setprofile] = useContext(ProfileContext);
  const params = new URLSearchParams(search);

  let title = params.get("title"); // bar
  if (title === null) {
    title = "";
  }
  // <<<<<<< HEAD
  const [jobs, setjobs] = useState(sample_jobs);
  // useEffect(() => {
  //   Axios.get("http://localhost:3001/viewJobs")
  //     .then((response) => {
  //       if (response.status === 200) {
  //         console.log(response);
  //         setjobs(response.data);
  //         console.log(jobs);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       console.log("Wrong username /Password");
  //     });
  // }, []);
  // =======
  const [jobs, setjobs] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/viewJobs")
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          setjobs(response.data);
          console.log(jobs);
        }
      })
      .catch((err) => {
        console.log(err);
        console.log("Wrong username /Password");
      });
  }, []);
  console.log(profile);
  // >>>>>>> 6b405961559f32f413eaca362ec50bd3be401b5e
  // console.log({ title });
  return (
    <div className="jobs-main">
      {jobs?.map((job, i) => {
        // console.log(job.jobId);
        return (
          <Fragment key={i}>
            {job?.job_title?.includes(title) ? (
              <CardWrapper job={job} user={user} />
            ) : null}
          </Fragment>
        );
      })}
    </div>
  );
}
export default withRouter(Jobs);
