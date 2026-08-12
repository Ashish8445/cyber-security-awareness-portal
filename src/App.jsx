import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Assessment from "./components/assessment/Assessment";


// Check if user is logged in
function ProtectedRoute({ children }) {
  const loggedInUser = localStorage.getItem("loggedInUser");

  if (!loggedInUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
}


// Check if logged-in user is Admin
function AdminRoute({ children }) {
  const loggedInUser = localStorage.getItem("loggedInUser");

  if (!loggedInUser) {
    return <Navigate to="/login" replace />;
  }

  try {
    const user = JSON.parse(loggedInUser);

    if (user.role !== "admin") {
      return <Navigate to="/dashboard" replace />;
    }

    return children;
  } catch (error) {
    console.error("Invalid login session:", error);
    localStorage.removeItem("loggedInUser");

    return <Navigate to="/login" replace />;
  }
}


function App() {
  return (
    <Routes>

      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />


      {/* Employee / Logged-in User Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/assessment"
        element={
          <ProtectedRoute>
            <Assessment />
          </ProtectedRoute>
        }
      />


      {/* Admin Only Route */}
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      />

      {/* Unknown URL */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />

    </Routes>
  );
}


export default App;