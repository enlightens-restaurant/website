import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setAdminToken } from "../../utils/adminAuth";

export function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        setError("Login failed. Please check your credentials.");
        return;
      }

      const data = await res.json();
      setAdminToken(data.token);
      navigate("/admin/dashboard");
    } catch (loginError) {
      console.error("Admin login error:", loginError);
      setError("Unable to login right now. Please try again.");
    }
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
          {error ? (
            <div className="form-error" role="alert">
              <p>{error}</p>
            </div>
          ) : null}
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
