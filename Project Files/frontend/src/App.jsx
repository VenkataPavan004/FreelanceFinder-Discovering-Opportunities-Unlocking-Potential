import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import Landing from "./pages/Landing";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

/* Freelancer */
import FreelancerDashboard from "./pages/freelancer/Dashboard";
import AllProjects from "./pages/freelancer/AllProjects";
import MyProjects from "./pages/freelancer/MyProjects";
import Applications from "./pages/freelancer/Applications";
import ProjectDetail from "./pages/freelancer/ProjectDetail";

/* Client */
import ClientDashboard from "./pages/client/Dashboard";
import NewProject from "./pages/client/NewProject";
import ClientMyProjects from "./pages/client/MyProjects";
import ClientApplications from "./pages/client/Applications";
import ClientProjects from "./pages/client/Projects";

/* Admin */
import AdminDashboard from "./pages/admin/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🌍 Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 🔐 Freelancer Protected Routes */}
        <Route
          path="/freelancer/dashboard"
          element={
            <ProtectedRoute role="freelancer">
              <FreelancerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/freelancer/projects"
          element={
            <ProtectedRoute role="freelancer">
              <AllProjects />
            </ProtectedRoute>
          }
        />

        <Route
          path="/freelancer/my-projects"
          element={
            <ProtectedRoute role="freelancer">
              <MyProjects />
            </ProtectedRoute>
          }
        />

        <Route
          path="/freelancer/applications"
          element={
            <ProtectedRoute role="freelancer">
              <Applications />
            </ProtectedRoute>
          }
        />

        <Route
          path="/freelancer/project/:id"
          element={
            <ProtectedRoute role="freelancer">
              <ProjectDetail />
            </ProtectedRoute>
          }
        />

        {/* 🔐 Client Protected Routes */}
        <Route
          path="/client/dashboard"
          element={
            <ProtectedRoute role="client">
              <ClientDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/client/projects"
          element={
            <ProtectedRoute role="client">
              <ClientProjects />
            </ProtectedRoute>
          }
        />

        <Route
          path="/client/new-project"
          element={
            <ProtectedRoute role="client">
              <NewProject />
            </ProtectedRoute>
          }
        />

        <Route
          path="/client/my-projects"
          element={
            <ProtectedRoute role="client">
              <ClientMyProjects />
            </ProtectedRoute>
          }
        />

        <Route
          path="/client/applications"
          element={
            <ProtectedRoute role="client">
              <ClientApplications />
            </ProtectedRoute>
          }
        />

        {/* 🔐 Admin Protected Route */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
