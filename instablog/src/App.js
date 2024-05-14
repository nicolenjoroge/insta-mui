import React from "react";
import Navbar from "./components/Navbar";
import Rightbar from "./components/rightbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Add from "./components/Add";

import { Box, Stack } from "@mui/material";

function App() {
  return (
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Add/>
    </Box>
  );
}

export default App;
