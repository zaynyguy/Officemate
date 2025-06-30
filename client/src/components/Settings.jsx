import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import "../styles/Settings.css";

// Define translations for Settings
const settingsTranslations = {
  English: {
    settingsTitle: "Settings",
    userProfile: "User Profile",
    loggedInAs: "Logged in as:",
    profileDescription: "This section displays your current login information.",
    editProfile: "Edit Profile (Coming Soon)",
    generalSettings: "General Settings",
    enableNotifications: "Enable Notifications",
    themes: "Dark Mode",
    language: "Language",
    securitySettings: "Security Settings",
    changePassword: "Change Password",
    manage: "Manage",
    twoFactorAuth: "Two-Factor Authentication",
    setup: "Setup",
    guest: "Guest",
  },
  Amharic: {
    settingsTitle: "ቅንብሮች",
    userProfile: "የተጠቃሚ መገለጫ",
    loggedInAs: "እንደ ተጠቃሚ የገቡት:",
    profileDescription: "ይህ ክፍል የአሁኑን የመግቢያ መረጃዎን ያሳያል።",
    editProfile: "መገለጫ አርትዕ (በቅርቡ ይመጣል)",
    generalSettings: "አጠቃላይ ቅንብሮች",
    enableNotifications: "ማሳወቂያዎችን አንቃ",
    themes: "ጥቁር ሞዴ",
    language: "ቋንቋ",
    securitySettings: "የደህንነት ቅንብሮች",
    changePassword: "የይለፍ ቃል ቀይር",
    manage: "አቀናብር",
    twoFactorAuth: "ባለሁለት ደረጃ ማረጋገጫ",
    setup: "አዘጋጅ",
    guest: "እንግዳ",
  },
  Oromo: {
    settingsTitle: "Qindaa'ina",
    userProfile: "Profaayilii Fayyadamaa",
    loggedInAs: "Akka fayyadamaatti seente:",
    profileDescription: "Kutaan kun odeeffannoo seensa kee ammaa agarsiisa.",
    editProfile: "Profaayilii Sirreessi (Duraan Dhufa)",
    generalSettings: "Qindaa'ina Waliigalaa",
    enableNotifications: "Beeksisa Dandeessisi",
    themes: "Mootii Dhiibbaa",
    language: "Afan",
    securitySettings: "Qindaa'ina Nageenyaa",
    changePassword: "Jecha Iccitii Jijjiiri",
    manage: "Bulchi",
    twoFactorAuth: "Mirkanneeffannaa Sadarkaa Lamaa",
    setup: "Qopheessi",
    guest: "Keessummaa",
  },
};

const Settings = ({ username, darkMode, toggleTheme }) => {
  const { currentLanguage, setCurrentLanguage } = useContext(LanguageContext);
  // Get translations for the current language, default to English if not found
  const translations = settingsTranslations[currentLanguage] || settingsTranslations.English;

  const handleLanguageChange = (event) => {
    setCurrentLanguage(event.target.value);
  };

  return (
    <div className="settings-container">
      <h1 className="settings-title">{translations.settingsTitle}</h1> {/* Translated */}

      <div className="settings-content-wrapper">
        <section className="settings-section profile-section">
          <h2 className="section-title">{translations.userProfile}</h2> {/* Translated */}
          <div className="profile-info">
            <div className="profile-avatar">
              {username ? username.charAt(0).toUpperCase() : "U"}
            </div>
            <div>
              <p className="profile-label">{translations.loggedInAs}</p> {/* Translated */}
              <p className="profile-username">
                {username.toUpperCase() || translations.guest} {/* Translated Guest */}
              </p>
            </div>
          </div>
          <p className="profile-description">
            {translations.profileDescription} {/* Translated */}
          </p>
          <button className="settings-button profile-button">
            {translations.editProfile} {/* Translated */}
          </button>
        </section>

        <section className="settings-section general-settings-section">
          <h2 className="section-title">{translations.generalSettings}</h2> {/* Translated */}
          <div className="settings-grid">
            <div className="setting-item">
              <label htmlFor="notifications" className="setting-label">
                {translations.enableNotifications} {/* Translated */}
              </label>
              <input
                type="checkbox"
                id="notifications"
                className="setting-checkbox"
                defaultChecked
              />
            </div>
            <div className="setting-item">
              <label htmlFor="dark-mode-toggle" className="setting-label">
                {translations.themes} {/* Translated */}
              </label>
              <input
                type="checkbox"
                id="dark-mode-toggle"
                className="setting-checkbox"
                checked={darkMode}
                onChange={toggleTheme}
              />
            </div>
            <div className="setting-item">
              <label htmlFor="language" className="setting-label">
                {translations.language} {/* Translated */}
              </label>
              <select
                id="language"
                className="setting-select"
                value={currentLanguage}
                onChange={handleLanguageChange}
              >
                <option value="English">English</option>
                <option value="Amharic">Amharic</option>
                <option value="Oromo">Oromo</option>
              </select>
            </div>
          </div>
        </section>

        <section className="settings-section security-settings-section">
          <h2 className="section-title">{translations.securitySettings}</h2> {/* Translated */}
          <ul className="security-list">
            <li className="setting-item security-item">
              <span className="setting-label">{translations.changePassword}</span> {/* Translated */}
              <button className="security-action-button">{translations.manage}</button> {/* Translated */}
            </li>
            <li className="setting-item security-item">
              <span className="setting-label">{translations.twoFactorAuth}</span> {/* Translated */}
              <button className="security-action-button">{translations.setup}</button> {/* Translated */}
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Settings;