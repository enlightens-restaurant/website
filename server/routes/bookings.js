const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const { requireAdminAuth } = require("../middleware/adminAuth");

// Create Booking
router.post("/", async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.json({ success: true });
});

// Get All Bookings (Admin)
router.get("/", requireAdminAuth, async (req, res) => {
  const bookings = await Booking.find().sort({ createdAt: -1 });
  res.json(bookings);
});

module.exports = router;
