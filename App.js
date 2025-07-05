import React from "react";
import { Route, Switch, Link } from "wouter";
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Attendance from "./pages/Attendance";
import Assessments from "./pages/Assessments";
import Certificates from "./pages/Certificates";
import Profile from "./pages/Profile";

function Home() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="display-4">📘 LMS Portal</h1>
        <p className="lead">Welcome to your Learning Management System</p>
        <div className="mt-4">
          <Link className="btn btn-primary mx-2" href="/login">Login</Link>
          <Link className="btn btn-success mx-2" href="/register">Register</Link>
         
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/courses" component={Courses} />
      <Route path="/attendance" component={Attendance} />
      <Route path="/assessments" component={Assessments} />
      <Route path="/certificates" component={Certificates} />
      <Route path="/profile" component={Profile} />
      <Route>❌ 404 - Page Not Found</Route>
    </Switch>
  );
}

export default App;










