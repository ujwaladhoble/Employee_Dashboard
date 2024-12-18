import React from "react";
import { Box } from "@mui/material";
import EmployeeCard from "./EmployeeCard";

const EmployeeGrid = ({ employees }) => (
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      gap: 2, 
      justifyContent: "center", 
    }}
  >
    {employees.map((employee) => (
      <Box
        key={employee.id}
        sx={{
          flex: "1 1 calc(33.333% - 16px)",
          maxWidth: "calc(33.333% - 16px)",
          boxSizing: "border-box",
        }}
      >
        <EmployeeCard employee={employee} />
      </Box>
    ))}
  </Box>
);

export default EmployeeGrid;
