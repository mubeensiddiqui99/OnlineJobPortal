import List from "@mui/material/List";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Profile({ userInfo, recentJobsApplied, loggedIn }) {
  if (!loggedIn) {
    return null;
  }
  return (
    <div>
      <h3>Profile:</h3>
      <List>
        {Object.keys(userInfo).map((key, index) => {
          //requires formatting keys in title case
          return (
            <p key={index} style={{ textAlign: "center" }}>
              {key}:{userInfo[key]}
            </p>
          );
        })}
        {recentJobsApplied && (
          <Fragment>
            <p>Recent Jobs Applied:</p>
            <List>
              {recentJobsApplied.map((job, index) => {
                return (
                  <p key={index}>
                    <Link to={`/jobs/${job.jobId}`}>{job.title}</Link>
                  </p>
                );
              })}
            </List>
          </Fragment>
        )}
      </List>
    </div>
  );
}
