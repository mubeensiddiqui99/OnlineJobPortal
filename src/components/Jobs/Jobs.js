import React, { Fragment } from "react";
import CardWrapper from "../Card/Card";
import "./style.css";
import { withRouter } from "react-router";

function Jobs({ loggedIn, jobs, user, location }) {
  // if (!loggedIn) {
  //   return <div>Please log in..</div>;
  // }
  const search = location.search; // could be '?foo=bar'
  const params = new URLSearchParams(search);
  let title = params.get("title"); // bar
  if (title === null) {
    title = "";
  }
  // console.log({ title });
  return (
    <div className="jobs-main">
      {jobs?.map((job, i) => {
        // console.log(job.jobId);
        return (
          <Fragment key={job.jobId}>
            {job?.title?.includes(title) ? (
              <CardWrapper
                jobid={job.jobId}
                title={job.title}
                desc={job.desc}
                user={user}
              />
            ) : null}
          </Fragment>
        );
      })}
    </div>
  );
}
export default withRouter(Jobs);
