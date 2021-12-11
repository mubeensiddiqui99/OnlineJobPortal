import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useParams, useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import { ApplicationsContext } from "../../App";

export default function EmployeeApplications() {
  const history = useHistory();
  const [applications, setApplications] = useContext(ApplicationsContext);
  return (
    <div>
      <h1>Applications</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>JOB_ID</TableCell>
              <TableCell align="right">EMP_ID</TableCell>
              <TableCell align="right">Status</TableCell>

              <TableCell align="right">CV</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {applications.map((app, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {app.JOB_ID}
                </TableCell>
                <TableCell align="right">3</TableCell>
                <TableCell align="right">{app.status}</TableCell>
                <TableCell align="right">
                  <Button
                    sx={{ color: "black" }}
                    onClick={() => {
                      history.push(`/cv`);
                    }}
                  >
                    CVname
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
