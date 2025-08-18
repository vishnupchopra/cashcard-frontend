// src/components/Login.jsx
import React, { useState } from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";
import { login } from "../api";

export default function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await login(username, password);
      setUser({ username, password });
    } catch {
      setError("Login failed");
      setLoading(false);
    }
  };

  return (
    <Paper elevation={6} sx={{ p: 4, mt: 10, maxWidth: 400, margin: "auto", background: "rgba(30,30,50,0.8)" }}>
      <Typography variant="h5" sx={{ mb: 2 }} align="center" color="primary">
        CashCard Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          type="password"
          label="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          sx={{ mb: 2 }}
        />
        {error && <Typography color="error" sx={{ mb: 2 }}>{error}</Typography>}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
        >
          Login
        </Button>
      </form>
    </Paper>
  );
}
