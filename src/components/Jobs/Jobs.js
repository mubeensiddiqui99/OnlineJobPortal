import React, { Fragment, useEffect, useState } from "react";
import CardWrapper from "../Card/Card";
import "./style.css";
import { withRouter } from "react-router";
import Axios from "axios";

function Jobs({ loggedIn, user, location }) {
  // console.log(jobs);
  // if (!loggedIn) {
  //   return <div>Please log in..</div>;
  // }
  const search = location.search; // could be '?foo=bar'
  const params = new URLSearchParams(search);

  let title = params.get("title"); // bar
  if (title === null) {
    title = "";
  }
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
