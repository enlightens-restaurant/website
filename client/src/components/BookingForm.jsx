import { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      alert("Booking submitted!");
      setForm({
        name: "",
        email: "",
        phone: "",
        date: "",
        guests: "",
        message: "",
      });
    } else {
      alert("Failed to book. Please try again.");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Book Your Experience
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border p-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border p-2"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full border p-2"
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          className="w-full border p-2"
        />
        <input
          type="number"
          name="guests"
          placeholder="No. of Guests"
          value={form.guests}
          onChange={handleChange}
          required
          className="w-full border p-2"
        />
        <textarea
          name="message"
          placeholder="Additional Notes"
          value={form.message}
          onChange={handleChange}
          className="w-full border p-2"
        />
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Submit Booking
        </button>
      </form>
    </div>
  );
}
