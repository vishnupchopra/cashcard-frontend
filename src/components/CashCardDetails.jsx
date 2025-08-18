// src/components/CashCardDetails.jsx
import React, { useEffect, useState } from "react";
import { fetchCashCard, editCashCard } from "../api";
import {
  Typography, TextField, Paper,
  Button, CircularProgress
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function CashCardDetails({ cardId, user, goBack, onCardChange }) {
  const [card, setCard] = useState(null);
  const [editAmount, setEditAmount] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const data = await fetchCashCard(cardId, user.username, user.password);
      setCard(data);
      setEditAmount(data.amount);
      setLoading(false);
    }
    load();
  }, [cardId, user]);

  const handleSave = async () => {
    await editCashCard(cardId, editAmount, user.username, user.password);
    onCardChange(); // Use the new handler to go back and refresh the list
  };

  if (loading) return <CircularProgress sx={{ m: 4 }} />;
  if (!card) return <Typography>Card not found.</Typography>;

  return (
    <Paper elevation={3} sx={{ p: 4, mt: 3, background: "rgba(54,54,90,0.9)" }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={goBack}
        variant="outlined"
        sx={{ mb: 2 }}
      >
        Back
      </Button>
      <Typography variant="h6" color="secondary">
        Card ID: {card.id}
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Owner: {card.owner}
      </Typography>
      <TextField
        fullWidth
        label="Amount"
        type="number"
        value={editAmount}
        onChange={e => setEditAmount(Number(e.target.value))}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={handleSave}>
        Save Changes
      </Button>
    </Paper>
  );
}