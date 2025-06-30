import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainLayout from './pages/MainLayout';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const storedAuth = localStorage.getItem('auth');
    const storedRole = localStorage.getItem('role');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
      setUserRole(storedRole || '');
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={(role) => {
          setIsAuthenticated(true);
          setUserRole(role);
          localStorage.setItem('auth', 'true');
          localStorage.setItem('role', role);
        }} />} />
        <Route path="/*" element={isAuthenticated ? <MainLayout role={userRole} /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
