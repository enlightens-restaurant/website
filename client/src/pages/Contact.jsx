import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    inquiryType: "dinner",
    date: "",
    guests: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill in all required fields.");
      return;
    }

    // Show success message
    setShowSuccess(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        inquiryType: "dinner",
        date: "",
        guests: "",
        message: "",
      });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Address",
      details: "Elite Tower, Neelbad, Bhopal",
    },
    {
      icon: "📞",
      title: "Phone",
      details: "+91-7772095526",
    },
    {
      icon: "✉️",
      title: "Email",
      details: "prashantparashar2018@gmail.com",
    },
    {
      icon: "⏰",
      title: "Hours",
      details: "Open Daily: 11 AM – 11 PM",
    },
  ];

  if (showSuccess) {
    return (
      <section className="contact py-16 page-section">
        <div className="container">
          <div className="section-header">
            <h2>Contact & Booking</h2>
            <p>
              Get in touch with us to make a reservation or plan your next event
            </p>
          </div>
          <div className="form-success">
            <p>
              ✓ Thank you! Your inquiry has been submitted successfully. We'll
              get back to you soon.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="contact py-16 page-section">
      <div className="container">
        <div className="section-header">
          <h2>Contact & Booking</h2>
          <p>
            Get in touch with us to make a reservation or plan your next event
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone *</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Email *</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Inquiry Type</label>
                  <select
                    className="form-control"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                  >
                    <option value="dinner">Dinner Reservation</option>
                    <option value="event">Event Booking</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Preferred Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Number of Guests</label>
                <input
                  type="number"
                  className="form-control"
                  name="guests"
                  min="1"
                  max="200"
                  value={formData.guests}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Special Requirements</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn--primary btn--full-width"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <div key={index} className="info-item">
                <div className="info-icon">{info.icon}</div>
                <div>
                  <h4>{info.title}</h4>
                  <p>{info.details}</p>
                </div>
              </div>
            ))}
            <div className="map-placeholder">
              <span>🗺️</span>
              <p>Google Maps Location</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
