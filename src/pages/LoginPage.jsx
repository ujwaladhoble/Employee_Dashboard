import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper, Alert } from "@mui/material";
import LoginImage from "../assets/Login.jpg";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      setError("Username and Password cannot be empty.");
      return;
    }

    if (username === "admin" && password === "1234") {
      setError(""); // Clear error message
      onLogin(true);
    } else {
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <Paper elevation={3} sx={{ height: "100%", display: "flex" }}>
        {/* Left Side - Background Image */}
        <Box
          sx={{
            flex: 1,
            backgroundImage: `url(${LoginImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Right Side - Login Form */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "80%", textAlign: "center" }}>
            <Typography variant="h4" gutterBottom>
              Login
            </Typography>
            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            <TextField
              label="Username"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={!username && error}
              helperText={!username && error ? "Username is required" : ""}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!password && error}
              helperText={!password && error ? "Password is required" : ""}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;
