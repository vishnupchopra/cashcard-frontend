// src/App.jsx
import React, { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from "./components/Header";
import FuturisticBackground from "./components/FuturisticBackground";
import Login from "./components/Login";
import CashCardList from "./components/CashCardList";
import CashCardDetails from "./components/CashCardDetails";
import CashCardForm from "./components/CashCardForm";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#00e0ff' },
    secondary: { main: '#e040fb' },
    background: { default: '#101820', paper: 'rgba(20,22,35,0.81)' }
  },
  typography: {
    fontFamily: 'Rubik, Arial, sans-serif',
    fontWeightMedium: 600
  }
});

export default function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("list"); // "list", "details", "add"
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [cardsReloadFlag, setCardsReloadFlag] = useState(0); // Used to trigger list update

  const handleLogout = () => {
    setUser(null);
    setPage("list");
    setSelectedCardId(null);
    setCardsReloadFlag(0);
  };

  // Called after adding or editing a card to trigger reload in CashCardList
  const handleCardChange = () => {
    setPage("list");
    setCardsReloadFlag(flag => flag + 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <FuturisticBackground />
      {user && (
        <Header user={user} onLogout={handleLogout} />
      )}
      {!user ? (
        <Login setUser={setUser} />
      ) : page === "details" ? (
        <CashCardDetails
          cardId={selectedCardId}
          user={user}
          onCardChange={handleCardChange} // Pass the new handler
          goBack={() => setPage("list")}
        />
      ) : page === "add" ? (
        <CashCardForm
          user={user}
          onAdded={handleCardChange} // Reuse the same handler
          goBack={() => setPage("list")}
        />
      ) : (
        <CashCardList
          user={user}
          selectCard={id => { setSelectedCardId(id); setPage("details"); }}
          showAddCard={() => setPage("add")}
          reloadFlag={cardsReloadFlag} // Trigger reload via prop
        />
      )}
    </ThemeProvider>
  );
}