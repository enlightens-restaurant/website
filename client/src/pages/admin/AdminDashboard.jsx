import { useEffect, useState } from "react";

export function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/bookings`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "Not specified";
    return new Date(dateString).toLocaleDateString();
  };

  if (loading) {
    return (
      <section className="contact py-16 page-section">
        <div className="container">
          <div className="section-header">
            <h2>Admin Dashboard</h2>
            <p>Loading booking requests...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="contact admin-dashboard py-16 page-section">
      <div className="container">
        <div className="section-header">
          <h2>Admin Dashboard</h2>
          <p>Manage booking requests and inquiries</p>
        </div>

        <div className="booking-stats">
          <div className="stats-grid admin-stats-grid">
            <div className="stat-card admin-stat-card">
              <h3 className="admin-stat-value">{bookings.length}</h3>
              <p className="admin-stat-label">Total Bookings</p>
            </div>
            <div className="stat-card admin-stat-card">
              <h3 className="admin-stat-value">
                {bookings.filter((b) => b.inquiryType === "dinner").length}
              </h3>
              <p className="admin-stat-label">Dinner Reservations</p>
            </div>
            <div className="stat-card admin-stat-card">
              <h3 className="admin-stat-value">
                {bookings.filter((b) => b.inquiryType === "event").length}
              </h3>
              <p className="admin-stat-label">Event Bookings</p>
            </div>
          </div>
        </div>

        <div className="bookings-list">
          <h3 className="admin-section-title">Recent Booking Requests</h3>

          {bookings.length === 0 ? (
            <div className="form-success">
              <p>No booking requests yet.</p>
            </div>
          ) : (
            <div className="bookings-grid admin-bookings-grid">
              {bookings.map((booking) => (
                <div key={booking._id} className="booking-card admin-booking-card">
                  <div className="booking-header admin-booking-header">
                    <div>
                      <h4 className="admin-booking-name">{booking.name}</h4>
                      <p className="admin-booking-email">{booking.email}</p>
                    </div>
                    {booking.inquiryType && (
                      <span
                        className="inquiry-type"
                        style={{
                          background:
                            booking.inquiryType === "dinner"
                              ? "#e8f5e8"
                              : booking.inquiryType === "event"
                              ? "#e8f0ff"
                              : "#fff3cd",
                          color:
                            booking.inquiryType === "dinner"
                              ? "#2d5a2d"
                              : booking.inquiryType === "event"
                              ? "#0056b3"
                              : "#856404",
                          padding: "0.25rem 0.75rem",
                          borderRadius: "20px",
                          fontSize: "0.8rem",
                          fontWeight: "500",
                        }}
                      >
                        {booking.inquiryType.charAt(0).toUpperCase() +
                          booking.inquiryType.slice(1)}
                      </span>
                    )}
                  </div>

                  <div className="booking-details admin-booking-details">
                    <div>
                      <strong className="admin-detail-label">📞 Phone:</strong>
                      <p className="admin-detail-value">{booking.phone}</p>
                    </div>
                    <div>
                      <strong className="admin-detail-label">📅 Date:</strong>
                      <p className="admin-detail-value">{formatDate(booking.date)}</p>
                    </div>
                    <div>
                      <strong className="admin-detail-label">👥 Guests:</strong>
                      <p className="admin-detail-value">
                        {booking.guests || "Not specified"}
                      </p>
                    </div>
                    <div>
                      <strong className="admin-detail-label">🕒 Submitted:</strong>
                      <p className="admin-detail-value">
                        {formatDate(booking.createdAt)}
                      </p>
                    </div>
                  </div>

                  {booking.message && (
                    <div>
                      <strong className="admin-detail-label">💬 Message:</strong>
                      <p className="admin-message-box">
                        {booking.message}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
