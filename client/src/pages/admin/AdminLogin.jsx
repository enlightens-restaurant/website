import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await fetch("http://localhost:5000/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) navigate("/admin/dashboard");
    else alert("Login failed");
  };
  return (
    <div className="p-10 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Admin Login</h2>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border w-full p-2 mb-3"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border w-full p-2 mb-3"
      />
      <button onClick={handleLogin} className="bg-black text-white px-4 py-2">
        Login
      </button>
    </div>
  );
}
