// src/pages/Dashboard.js
import React from 'react';
import { Link } from 'wouter';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🎓 LMS Dashboard</h2>
      
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow rounded-3">
            <div className="card-body text-center">
              <h5 className="card-title">📚 My Courses</h5>
              <p className="card-text">View and manage your enrolled courses.</p>
              <Link href="/courses" className="btn btn-outline-primary">View</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow rounded-3">
            <div className="card-body text-center">
              <h5 className="card-title">📅 Attendance</h5>
              <p className="card-text">Track your daily course attendance.</p>
              <Link href="/attendance" className="btn btn-outline-success">Track</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow rounded-3">
            <div className="card-body text-center">
              <h5 className="card-title">📝 Assessments</h5>
              <p className="card-text">Attempt tests and view results.</p>
              <Link href="/assessments" className="btn btn-outline-warning">Start</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow rounded-3">
            <div className="card-body text-center">
              <h5 className="card-title">🎓 Certifications</h5>
              <p className="card-text">Download your earned certificates.</p>
              <Link href="/certificates" className="btn btn-outline-info">Download</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow rounded-3">
            <div className="card-body text-center">
              <h5 className="card-title">⚙️ Profile</h5>
              <p className="card-text">Update your personal info and password.</p>
              <Link href="/profile" className="btn btn-outline-dark">Edit</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow rounded-3 bg-light text-center p-3">
            <button
              className="btn btn-danger mt-2"
              onClick={() => {
                localStorage.removeItem("token");
                window.location.href = "/login";
              }}
            >
              🚪 Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;






