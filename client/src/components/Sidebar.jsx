import { useState, useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import "../styles/Sidebar.css";

// Define translations for Sidebar
const sidebarTranslations = {
  English: {
    officemate: "Officemate",
    dashboard: "Dashboard",
    projects: "Projects",
    activities: "Activities",
    reports: "Reports",
    settings: "Settings",
    expandSidebar: "Expand Sidebar",
    collapseSidebar: "Collapse Sidebar",
  },
  Amharic: {
    officemate: "ኦፊስማት",
    dashboard: "ዳሽቦርድ",
    projects: "ፕሮጀክቶች",
    activities: "እንቅስቃሴዎች",
    reports: "ሪፖርቶች",
    settings: "ቅንብሮች",
    expandSidebar: "የጎን አሞሌን ዘርጋ",
    collapseSidebar: "የጎን አሞሌን ዝጋ",
  },
  Oromo: {
    officemate: "Officemate",
    dashboard: "Daashboordii",
    projects: "Pirojektiiwwan",
    activities: "Hojiiwwan",
    reports: "Gabaasaa",
    settings: "Qindaa'ina",
    expandSidebar: "Saayidbaarii Bal'isi",
    collapseSidebar: "Saayidbaarii Cuqi",
  },
};

const Sidebar = ({ onSelect, items }) => {
  const { currentLanguage } = useContext(LanguageContext);
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  const translations = sidebarTranslations[currentLanguage] || sidebarTranslations.English;

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div>
        <div className="title">
          <div className="label">{translations.officemate}</div>

          <button
            onClick={toggleCollapse}
            className="hamburger"
            title={collapsed ? translations.expandSidebar : translations.collapseSidebar}
          >
            ☰
          </button>
        </div>

        <div className="sidebar-items">
          {items.map((item) => (
            <button
              key={item.label}
              onClick={() => onSelect(item.label)}
              title={collapsed ? translations[item.label.toLowerCase()] : ""}
            >
              <span className="icon">{item.icon}</span>
              {!collapsed && <span className="label">{translations[item.label.toLowerCase()]}</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="toggles">
        <button
          className="toggle"
          onClick={() => onSelect("Settings")}
        >
          ⚙ <div className="label">{collapsed ? "" : translations.settings} </div>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;