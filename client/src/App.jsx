import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainLayout from './pages/MainLayout';
import { LanguageProvider } from './contexts/LanguageContext'; // Import LanguageProvider

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [loggedInUsername, setLoggedInUsername] = useState('');
  const [darkMode, setDarkMode] = useState(() => {
    return document.body.classList.contains('dark-mode');
  });

  const toggleTheme = () => {
    document.body.classList.toggle('dark-mode');
    setDarkMode(document.body.classList.contains('dark-mode'));
  };

  useEffect(() => {
    const storedAuth = localStorage.getItem('auth');
    const storedRole = localStorage.getItem('role');
    const storedUsername = localStorage.getItem('username');

    if (storedAuth === 'true') {
      setIsAuthenticated(true);
      setUserRole(storedRole || '');
      setLoggedInUsername(storedUsername || '');
    }
    setDarkMode(document.body.classList.contains('dark-mode'));
  }, []);

  return (
    <Router>
      <LanguageProvider> {/* Wrap your entire app with LanguageProvider */}
        <Routes>
          <Route
            path="/login"
            element={
              <LoginPage
                onLogin={(role, username) => {
                  setIsAuthenticated(true);
                  setUserRole(role);
                  setLoggedInUsername(username);
                  localStorage.setItem('auth', 'true');
                  localStorage.setItem('role', role);
                  localStorage.setItem('username', username);
                }}
              />
            }
          />
          <Route
            path="/*"
            element={
              isAuthenticated ? (
                <MainLayout
                  role={userRole}
                  username={loggedInUsername}
                  darkMode={darkMode}
                  toggleTheme={toggleTheme}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </LanguageProvider>
    </Router>
  );
}

export default App;