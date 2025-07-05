import React, { useState } from "react";
import { useLocation } from "wouter";
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [, navigate] = useLocation();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful login
    localStorage.setItem("token", "sample-login-token");
    alert("Login successful!");
    navigate("/dashboard");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🔐 Login</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: 400 }}>
        <input type="email" className="form-control mb-3" placeholder="Email"
          value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />

        <input type="password" className="form-control mb-3" placeholder="Password"
          value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} required />

        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

export default Login;




