// src/components/CashCardList.jsx
import React, { useEffect, useState } from "react";
import { fetchCashCards, deleteCashCard } from "../api";
import {
  Paper, List, ListItem, ListItemText, Typography, IconButton,
  TextField, Select, MenuItem, Button, CircularProgress, Alert, Box
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

export default function CashCardList({ user, selectCard, showAddCard, reloadFlag }) {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("amount");
  const [page, setPage] = useState(0); // Start page at 0 for API

  useEffect(() => {
    const loadCards = async () => {
      setLoading(true);
      setError(null);
      try {
        // The API now returns a simple array
        const data = await fetchCashCards(
          user.username, user.password, page, 5, sort
        );
        setCards(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error("Failed to fetch cash cards:", e);
        setError(e.message);
        setCards([]);
      } finally {
        setLoading(false);
      }
    };
    loadCards();
  }, [user, page, sort, reloadFlag]);

  // Client-side filtering
  const filtered = (cards || []).filter(card =>
    card.amount.toString().includes(search) ||
    card.owner.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async (id) => {
    try {
      await deleteCashCard(id, user.username, user.password);
      // Reload the current page after delete
      const data = await fetchCashCards(
        user.username, user.password, page, 5, sort
      );
      setCards(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error("Failed to delete card:", e);
      setError(e.message);
    }
  };

  return (
    <Paper elevation={8} sx={{
      mt: 3, mx: "auto", maxWidth: 500, p: 3,
      backdropFilter: "blur(8px)",
      background: "rgba(36, 54, 78, 0.8)",
      boxShadow: "0 4px 24px #00e0ff55"
    }}>
      <Typography variant="h4" color="primary" align="center" sx={{ mb: 2 }}>
        Your Cash Cards
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          <strong>Error:</strong> {error}
        </Alert>
      )}

      <div style={{display:"flex", gap:"1rem", marginBottom:"1rem", flexWrap:"wrap"}}>
        <TextField
          placeholder="Search on this page..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          variant="outlined"
          size="small"
          InputProps={{ startAdornment: <SearchIcon /> }}
        />
        <Select value={sort} onChange={e => setSort(e.target.value)} size="small">
          <MenuItem value="amount">Sort by Amount</MenuItem>
        </Select>
        <Button
          startIcon={<AddIcon />}
          variant="contained"
          onClick={showAddCard}
        >
          Add Card
        </Button>
      </div>
      
      {loading ? (
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <CircularProgress color="primary" />
        </div>
      ) : (
        <>
          <List>
            {filtered.map(card => (
              <ListItem button key={card.id} onClick={() => selectCard(card.id)}
                sx={{
                  borderRadius:2, mb:2,
                  background:"rgba(20,40,80,0.7)",
                  boxShadow:"0 2px 8px #00e0ff55",
                  transition:"transform 0.1s", ":hover":{transform:"scale(1.03)"}
                }}>
                <ListItemText
                  primary={`₹${card.amount}`}
                  secondary={`ID: ${card.id} • Owner: ${card.owner}`}
                  sx={{color:"secondary.light"}}
                />
                <IconButton
                  edge="end"
                  color="error"
                  onClick={e => { e.stopPropagation(); handleDelete(card.id); }}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
          {/* Simple Pagination Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, gap: 2 }}>
            <Button 
              variant="outlined" 
              disabled={page === 0}
              onClick={() => setPage(p => p - 1)}
            >
              Previous
            </Button>
            <Typography sx={{alignSelf: 'center'}}>Page {page + 1}</Typography>
            <Button 
              variant="outlined"
              disabled={cards.length < 5} // Disable if the page isn't full
              onClick={() => setPage(p => p + 1)}
            >
              Next
            </Button>
          </Box>
        </>
      )}
    </Paper>
  );
}