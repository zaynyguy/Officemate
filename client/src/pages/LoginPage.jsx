import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css'; 

const users = {
  admin: 'admin123',
  manager: 'manager123',
  staff: 'staff123',
};

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage(''); 

    if (users[username] === password) {
      onLogin(username, username); 
      navigate('/');
    } else {
      setErrorMessage('Invalid credentials. Please try again.'); 
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            required
          />
          {errorMessage && (
            <p className="error-message">{errorMessage}</p>
          )}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default LoginPage;
