import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainLayout from "./pages/MainLayout";
// Removed './index.css' as it was likely for Tailwind setup.
// Each component will now import its specific CSS.

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [loggedInUsername, setLoggedInUsername] = useState(""); // New state for logged-in username

  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    const storedRole = localStorage.getItem("role");
    const storedUsername = localStorage.getItem("username"); // Retrieve username from local storage

    if (storedAuth === "true") {
      setIsAuthenticated(true);
      setUserRole(storedRole || "");
      setLoggedInUsername(storedUsername || ""); // Set username
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <LoginPage
              onLogin={(role, username) => {
                
                setIsAuthenticated(true);
                setUserRole(role);
                setLoggedInUsername(username); 
                localStorage.setItem("auth", "true");
                localStorage.setItem("role", role);
                localStorage.setItem("username", username); 
              }}
            />
          }
        />
        <Route
          path="/*"
          element={
            isAuthenticated ? (
              <MainLayout role={userRole} username={loggedInUsername} /> // Pass username to MainLayout
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
