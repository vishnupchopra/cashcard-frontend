// src/components/CashCardForm.jsx
import React, { useState } from "react";
import { addCashCard } from "../api";
import {
  Paper, Typography, TextField, Button
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function CashCardForm({ user, onAdded, goBack }) {
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addCashCard(amount, user.username, user.password);
    if (onAdded) onAdded(); // Trigger reload in parent/app
  };

  return (
    <Paper elevation={3} sx={{ p: 4, mt: 3, background: "rgba(44,44,70,0.9)" }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={goBack}
        variant="outlined"
        sx={{ mb: 2 }}
      >
        Back
      </Button>
      <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
        Add New Cash Card
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Amount"
          value={amount}
          type="number"
          onChange={e => setAmount(Number(e.target.value))}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button variant="contained" type="submit" fullWidth>
          Add Card
        </Button>
      </form>
    </Paper>
  );
}
