const express = require("express");
const router = express.Router();
require("dotenv").config();
const { createAdminToken, requireAdminAuth } = require("../middleware/adminAuth");

// Simple login with env-based email/password
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    return res.json({ token: createAdminToken() });
  }
  res.status(401).json({ error: "Unauthorized" });
});

router.get("/session", requireAdminAuth, (_req, res) => {
  res.json({ authenticated: true });
});

module.exports = router;
