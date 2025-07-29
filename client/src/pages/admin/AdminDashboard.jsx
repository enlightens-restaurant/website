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
    <section className="contact py-16 page-section">
      <div className="container">
        <div className="section-header">
          <h2>Admin Dashboard</h2>
          <p>Manage booking requests and inquiries</p>
        </div>

        <div className="booking-stats" style={{ marginBottom: "2rem" }}>
          <div
            className="stats-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <div
              className="stat-card"
              style={{
                background: "#f8f9fa",
                padding: "1.5rem",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  margin: "0 0 0.5rem 0",
                  fontSize: "2rem",
                  color: "#d4af37",
                }}
              >
                {bookings.length}
              </h3>
              <p style={{ margin: 0, color: "#666" }}>Total Bookings</p>
            </div>
            <div
              className="stat-card"
              style={{
                background: "#f8f9fa",
                padding: "1.5rem",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  margin: "0 0 0.5rem 0",
                  fontSize: "2rem",
                  color: "#d4af37",
                }}
              >
                {bookings.filter((b) => b.inquiryType === "dinner").length}
              </h3>
              <p style={{ margin: 0, color: "#666" }}>Dinner Reservations</p>
            </div>
            <div
              className="stat-card"
              style={{
                background: "#f8f9fa",
                padding: "1.5rem",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  margin: "0 0 0.5rem 0",
                  fontSize: "2rem",
                  color: "#d4af37",
                }}
              >
                {bookings.filter((b) => b.inquiryType === "event").length}
              </h3>
              <p style={{ margin: 0, color: "#666" }}>Event Bookings</p>
            </div>
          </div>
        </div>

        <div className="bookings-list">
          <h3
            style={{
              marginBottom: "1.5rem",
              borderBottom: "2px solid #d4af37",
              paddingBottom: "0.5rem",
            }}
          >
            Recent Booking Requests
          </h3>

          {bookings.length === 0 ? (
            <div className="form-success">
              <p>No booking requests yet.</p>
            </div>
          ) : (
            <div
              className="bookings-grid"
              style={{ display: "grid", gap: "1.5rem" }}
            >
              {bookings.map((booking) => (
                <div
                  key={booking._id}
                  className="booking-card"
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    padding: "1.5rem",
                    background: "#fff",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  <div
                    className="booking-header"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "1rem",
                      borderBottom: "1px solid #eee",
                      paddingBottom: "1rem",
                    }}
                  >
                    <div>
                      <h4
                        style={{
                          margin: "0 0 0.5rem 0",
                          fontSize: "1.25rem",
                          color: "#333",
                        }}
                      >
                        {booking.name}
                      </h4>
                      <p
                        style={{
                          margin: "0",
                          color: "#666",
                          fontSize: "0.9rem",
                        }}
                      >
                        {booking.email}
                      </p>
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

                  <div
                    className="booking-details"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div>
                      <strong style={{ color: "#d4af37" }}>📞 Phone:</strong>
                      <p style={{ margin: "0.25rem 0 0 0" }}>{booking.phone}</p>
                    </div>
                    <div>
                      <strong style={{ color: "#d4af37" }}>📅 Date:</strong>
                      <p style={{ margin: "0.25rem 0 0 0" }}>
                        {formatDate(booking.date)}
                      </p>
                    </div>
                    <div>
                      <strong style={{ color: "#d4af37" }}>👥 Guests:</strong>
                      <p style={{ margin: "0.25rem 0 0 0" }}>
                        {booking.guests || "Not specified"}
                      </p>
                    </div>
                    <div>
                      <strong style={{ color: "#d4af37" }}>
                        🕒 Submitted:
                      </strong>
                      <p style={{ margin: "0.25rem 0 0 0" }}>
                        {formatDate(booking.createdAt)}
                      </p>
                    </div>
                  </div>

                  {booking.message && (
                    <div>
                      <strong style={{ color: "#d4af37" }}>💬 Message:</strong>
                      <p
                        style={{
                          margin: "0.5rem 0 0 0",
                          fontStyle: "italic",
                          background: "#f8f9fa",
                          padding: "1rem",
                          borderRadius: "4px",
                          borderLeft: "4px solid #d4af37",
                        }}
                      >
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
