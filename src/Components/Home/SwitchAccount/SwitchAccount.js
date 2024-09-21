import React, { useState, useEffect } from "react";
import "./SwitchAccount.css";
import { Avatar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function SwitchAccount({ onClose }) {
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const storedAccounts = [
        {
          username: "john_doe",
          email: "john@example.com",
          avatar: "https://via.placeholder.com/150",
          fullName: "John Doe",
        },
        {
          username: "jane_doe",
          email: "jane@example.com",
          avatar: "https://via.placeholder.com/150",
          fullName: "Jane Doe",
        },
      ];
      setAccounts(storedAccounts);
      setLoading(false);
    }, 1000);
  }, []);

  const handleAccountSwitch = (account) => {
    setSelectedAccount(account);
    console.log(`Switched to account: ${account.username}`);
  };

  const handleAddAccount = () => {
    window.location.href = "/login";
  };

  return (
    <div className="switch-account-container">
      <div className="close-button">
        <IconButton onClick={onClose} aria-label="close">
          <CloseIcon />
        </IconButton>
      </div>

      <h2>Switch Account</h2>

      {loading ? (
        <p>Loading accounts...</p>
      ) : (
        <div className="accounts-list">
          {accounts.map((account, index) => (
            <div
              key={index}
              className={`account-item ${
                selectedAccount === account ? "selected" : ""
              }`}
              onClick={() => handleAccountSwitch(account)}
            >
              <Avatar
                src={account.avatar}
                alt={account.username}
                sx={{ width: 50, height: 50, marginRight: 15 }}
              />
              <div className="account-details">
                <p className="username">{account.username}</p>
                <p className="full-name">{account.fullName}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <button className="add-account-btn" onClick={handleAddAccount}>
        Add New Account
      </button>
    </div>
  );
}

export default SwitchAccount;
