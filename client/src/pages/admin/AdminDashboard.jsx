import { useEffect, useState } from "react";

export function AdminDashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-3xl font-semibold mb-6">Booking Requests</h2>
      {bookings.map((b) => (
        <div key={b._id} className="border p-4 mb-4 rounded">
          <p>
            <strong>{b.name}</strong> ({b.email})
          </p>
          <p>
            {b.date} | Guests: {b.guests}
          </p>
          <p>📞 {b.phone}</p>
          <p className="italic">{b.message}</p>
        </div>
      ))}
    </div>
  );
}
