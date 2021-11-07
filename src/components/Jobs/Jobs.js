import React, { useState } from "react";
import CardWrapper from "../Card/Card";
import "./style.css";

export default function Jobs({ loggedIn, jobs, user }) {
  if (!loggedIn) {
    return <div>Please log in..</div>;
  }

  return (
    <div className="jobs-main">
      {jobs?.map((job, i) => {
        console.log(job.jobId);
        return (
          <CardWrapper
            jobid={job.jobId}
            key={job.jobId}
            title={job.title}
            desc={job.desc}
            user={user}
          />
        );
      })}
    </div>
  );
}
