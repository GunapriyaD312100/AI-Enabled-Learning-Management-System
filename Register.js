import React, { useState } from "react";
import { useLocation } from "wouter";
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
  const [, navigate] = useLocation();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful registration
    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">📝 Register</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: 400 }}>
        <input type="text" className="form-control mb-3" placeholder="Name"
          value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />

        <input type="email" className="form-control mb-3" placeholder="Email"
          value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />

        <input type="password" className="form-control mb-3" placeholder="Password"
          value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} required />

        <button type="submit" className="btn btn-success w-100">Register</button>
      </form>
    </div>
  );
}

export default Register;



