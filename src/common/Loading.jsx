import React from "react";
import { Stack, CircularProgress } from "@mui/material";
const Loading = () => {
  return (
    <div className="app-content-loading">
      <div className="loading-main row">
        <Stack sx={{ color: "grey.500" }}>
          <CircularProgress color="inherit" />
        </Stack>
      </div>
    </div>
  );
};

export default Loading;
