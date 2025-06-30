import { useState } from "react";
import "../styles/Settings.css"; 

const Settings = ({ username }) => {
  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
    setDarkMode(document.body.classList.contains("dark-mode"));
  };

  return (
    <div className="settings-container">
      <h1 className="settings-title">Settings</h1>

      <div className="settings-content-wrapper">
        {/* User Profile Section */}
        <section className="settings-section profile-section">
          <h2 className="section-title">User Profile</h2>
          <div className="profile-info">
            <div className="profile-avatar">
              {username ? username.charAt(0).toUpperCase() : "U"}
            </div>
            <div>
              <p className="profile-label">Logged in as:</p>
              <p className="profile-username">
                {username.toUpperCase() || "Guest"}
              </p>
            </div>
          </div>
          <p className="profile-description">
            This section displays your current login information.
          </p>
          <button className="settings-button profile-button">
            Edit Profile (Coming Soon)
          </button>
        </section>

        {/* General Settings Section */}
        <section className="settings-section general-settings-section">
          <h2 className="section-title">General Settings</h2>
          <div className="settings-grid">
            <div className="setting-item">
              <label htmlFor="notifications" className="setting-label">
                Enable Notifications
              </label>
              <input
                type="checkbox"
                id="notifications"
                className="setting-checkbox"
                defaultChecked
              />
            </div>
            <div className="setting-item">
              <label htmlFor="dark-mode" className="setting-label">
                Themes
              </label>
              <input
                type="checkbox"
                id="dark-mode"
                className="setting-checkbox"
                onClick={toggleTheme}
              />
            </div>
            <div className="setting-item">
              <label htmlFor="language" className="setting-label">
                Language
              </label>
              <select id="language" className="setting-select">
                <option>English</option>
                <option>Amharic</option>
                <option>Oromo</option>
              </select>
            </div>
          </div>
        </section>

        {/* Security Settings Section */}
        <section className="settings-section security-settings-section">
          <h2 className="section-title">Security Settings</h2>
          <ul className="security-list">
            <li className="setting-item security-item">
              <span className="setting-label">Change Password</span>
              <button className="security-action-button">Manage</button>
            </li>
            <li className="setting-item security-item">
              <span className="setting-label">Two-Factor Authentication</span>
              <button className="security-action-button">Setup</button>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Settings;
