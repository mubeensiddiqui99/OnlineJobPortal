import { Divider, ListItem } from "@mui/material";
import List from "@mui/material/List";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";

export default function Profile({ userInfo, recentJobsApplied, loggedIn }) {
  if (!loggedIn) {
    return null;
  }
  // console.log({ userInfo });
  return (
    <div style={{ textAlign: "center" }}>
      <Avatar />
      <List>
        {/* {Object.keys(userInfo).map((key, index) => {
          //requires formatting keys in title case
          return (
            <p key={index} style={{ textAlign: "center" }}>
              {key}:{userInfo[key]}
            </p>
          );
        })}
         */}
        <ListItem>Name: {userInfo.name}</ListItem>
        <ListItem>Age: {userInfo.age}</ListItem>
        <ListItem>Email: {userInfo.email}</ListItem>
        <ListItem>Last School: {userInfo.lastSchool}</ListItem>
        <ListItem>Last Qualification: {userInfo.lastQualification}</ListItem>
        {recentJobsApplied && (
          <Fragment>
            <ListItem>Recent Jobs Applied:</ListItem>
            <ListItem>
              <List>
                {recentJobsApplied.map((job, index) => {
                  return (
                    <Fragment>
                      <ListItem key={index}>
                        <Link
                          style={{ color: "inherit", textDecoration: "none" }}
                          to={`/jobs/${job.jobId}`}
                        >
                          {job.title}
                        </Link>
                      </ListItem>
                      <Divider />
                    </Fragment>
                  );
                })}
              </List>
            </ListItem>
          </Fragment>
        )}
      </List>
    </div>
  );
}
