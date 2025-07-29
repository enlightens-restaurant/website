import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) navigate("/admin/dashboard");
    else alert("Login failed");
  };

  return (
    <section className="contact py-16 page-section">
      <div className="container">
        <div className="section-header">
          <h2>Admin Login</h2>
          <p>Sign in to access the admin dashboard</p>
        </div>
        <div
          className="contact-form"
          style={{ maxWidth: "400px", margin: "0 auto" }}
        >
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="admin@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            onClick={handleLogin}
            className="btn btn--primary btn--full-width"
          >
            Login to Dashboard
          </button>
        </div>
      </div>
    </section>
  );
}
