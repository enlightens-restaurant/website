const express = require("express");
const router = express.Router();
require("dotenv").config();

// Simple login with env-based email/password
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    return res.json({ token: "dummy-admin-token" });
  }
  res.status(401).json({ error: "Unauthorized" });
});

module.exports = router;
