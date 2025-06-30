import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import '../styles/LoginPage.css';
import officeLogo from '../assets/logo.png';

const officeLogoUrl = officeLogo; // URL for the right-side image

// Define translations for LoginPage
const loginTranslations = {
  English: {
    login: "Login",
    username: "Username",
    password: "Password",
    invalidCredentials: "Invalid credentials. Please try again.",
    tryWith: "Try with:",
    officeWorksLogin: "OfficeWorks Login"
  },
  Amharic: {
    login: "ግባ",
    username: "የተጠቃሚ ስም",
    password: "የይለፍ ቃል",
    invalidCredentials: "የተሳሳተ የተጠቃሚ ስም ወይም የይለፍ ቃል",
    tryWith: "ይሞክሩ በ:",
    officeWorksLogin: "ኦፊስወርክስ መግቢያ"
  },
  Oromo: {
    login: "Seeni",
    username: "Maqaa Fayyadamaa",
    password: "Jecha Iccitii",
    invalidCredentials: "Maqaa fayyadamaa yookaan jechi iccitii dogoggoraadha. Irra deebi'ii yaali.",
    tryWith: "Yaali:",
    officeWorksLogin: "Seensa OfficeWorks"
  },
};

const users = {
  admin: 'admin123',
  manager: 'manager123',
  staff: 'staff123',
};

const LoginPage = ({ onLogin }) => {
  const { currentLanguage } = useContext(LanguageContext);
  const translations = loginTranslations[currentLanguage] || loginTranslations.English;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (users[username] === password) {
      onLogin(username, username); // Pass role and username
      navigate('/');
    } else {
      setErrorMessage(translations.invalidCredentials);
    }
  };

  return (
    <div className="login-page">
      <div className="login-main-container"> {/* This is the flex container for left/right */}
        {/* LEFT: Login Form */}
        <div className="login-left">
          <form onSubmit={handleLogin} className="login-form">
            <h2 className="login-title">{translations.officeWorksLogin}</h2>
            {errorMessage && <div className="error-message">{errorMessage}</div>}

            <div className="form-group">
              <label htmlFor="username">{translations.username}</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder={translations.username}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">{translations.password}</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder={translations.password}
                required
              />
            </div>

            <button type="submit" className="login-button">
              {translations.login}
            </button>
          </form>
          <p className="login-hint">
            {translations.tryWith} admin/admin123, manager/manager123, staff/staff123
          </p>
        </div>

        {/* RIGHT: Logo/Image Section */}
        <div
          className="login-right"
          style={{ backgroundImage: `url(${officeLogoUrl})` }}
        />
      </div>
    </div>
  );
};

export default LoginPage;
