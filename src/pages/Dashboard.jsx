import React, { useState } from "react";
import { Button, Box, Typography, AppBar, Toolbar } from "@mui/material";
import EmployeeTable from "../components/EmployeeTable";
import EmployeeGrid from "../components/EmployeeGrid";
import employees from "../data/employees";

const Dashboard = ({ onLogout }) => {
  const [view, setView] = useState("table");

  const handleLogout = () => {
    onLogout(false);
  };

  return (
    <Box sx={{ width: "100%", minHeight: "100vh" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Employee Dashboard
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Box textAlign="center" mt={5}>
        <Typography variant="h4">Employee List</Typography>
        <Box mt={2}>
          <Button variant="contained" onClick={() => setView("table")} sx={{ marginRight: 1 }}>
            Table View
          </Button>
          <Button variant="contained" onClick={() => setView("grid")}>
            Grid View
          </Button>
        </Box>
        <Box mt={3} sx={{ width: "100%" }}>
          {view === "table" ? <EmployeeTable employees={employees} /> : <EmployeeGrid employees={employees} />}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
