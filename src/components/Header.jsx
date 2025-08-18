import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Avatar, Tooltip } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

export default function Header({ user, onLogout }) {
  return (
    <AppBar position="static" sx={{ backdropFilter: "blur(6px)" }}>
      <Toolbar>
        <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>CC</Avatar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          CashCard Portal
        </Typography>
        <Typography variant="body1" sx={{ mr: 2 }}>
          Welcome, {user.username}
        </Typography>
        <Tooltip title="Logout">
          <IconButton color="inherit" onClick={onLogout}>
            <LogoutIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
