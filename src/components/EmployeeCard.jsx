import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const EmployeeCard = ({ employee }) => (
  <Card sx={{ minWidth: 200, margin: 2 }}  elevation={3}>
    <CardContent>
      <Typography variant="h6">{employee.name}</Typography>
      <Typography color="text.secondary">{employee.position}</Typography>
      <Typography variant="body2">{`Department: ${employee.department}`}</Typography>
    </CardContent>
  </Card>
);

export default EmployeeCard;
