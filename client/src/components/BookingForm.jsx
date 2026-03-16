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
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setShowSuccess(true);
        setForm({
          name: "",
          email: "",
          phone: "",
          date: "",
          guests: "",
          message: "",
        });

        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        alert("Failed to book. Please try again.");
      }
    } catch (error) {
      console.error("Booking error:", error);
      alert("Failed to book. Please try again.");
    }
  };

  return (
    <section className="contact py-16 page-section">
      <div className="container">
        <div className="section-header">
          <h2>Book Your Experience</h2>
          <p>
            Reserve your table or event space at Enlightens for an unforgettable
            dining experience
          </p>
        </div>

        {showSuccess && (
          <div className="form-success">
            <p>
              ✓ Thank you! Your booking has been submitted successfully. We'll
              contact you soon to confirm.
            </p>
          </div>
        )}

        <div
          className="contact-form booking-form-shell"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="booking-name">
                  Your Name *
                </label>
                <input
                  id="booking-name"
                  type="text"
                  name="name"
                  className="form-control"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="booking-phone">
                  Phone Number *
                </label>
                <input
                  id="booking-phone"
                  type="tel"
                  name="phone"
                  className="form-control"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="booking-email">
                Email Address *
              </label>
              <input
                id="booking-email"
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="booking-date">
                  Preferred Date
                </label>
                <input
                  id="booking-date"
                  type="date"
                  name="date"
                  className="form-control"
                  value={form.date}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="booking-guests">
                  Number of Guests
                </label>
                <input
                  id="booking-guests"
                  type="number"
                  name="guests"
                  className="form-control"
                  value={form.guests}
                  onChange={handleChange}
                  placeholder="How many guests?"
                  min="1"
                  max="200"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="booking-message">
                Special Requirements or Notes
              </label>
              <textarea
                id="booking-message"
                name="message"
                className="form-control"
                value={form.message}
                onChange={handleChange}
                rows="4"
                placeholder="Any special requests, dietary restrictions, or event details..."
              />
            </div>

            <button type="submit" className="btn btn--primary btn--full-width">
              Submit Booking Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
