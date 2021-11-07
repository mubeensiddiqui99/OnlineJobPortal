import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef } from "react";
import { useHistory } from "react-router";

export default function SearchJobs() {
  const searchref = useRef();
  const history = useHistory();
  const handleSearch = () => {
    const searchval = searchref.current.value;

    // console.log({ searchval });
    history.push(`/jobs/?title=${searchval}`);
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: 500,
        maxWidth: "100%",
        m: "auto",
      }}
    >
      <TextField
        fullWidth
        label="Search Jobs"
        id="search"
        inputRef={searchref}
      />
      <Button onClick={handleSearch}>Search</Button>
    </Box>
  );
}
