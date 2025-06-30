import { useState } from "react";
import "../styles/Sidebar.css";

const Sidebar = ({ onSelect, items }) => {
  const [collapsed, setCollapsed] = useState(false);
  
  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
    setDarkMode(document.body.classList.contains("dark-mode"));
  };

  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div>
        <div className="title">
          <div className="label">Officemate</div>

          <button onClick={toggleCollapse} className="hamburger">
            ☰
          </button>
        </div>

        <div className="sidebar-items">
          {items.map((item) => (
            <button
              key={item.label}
              onClick={() => onSelect(item.label)}
              title={collapsed ? item.label : ""}
            >
              <span className="icon">{item.icon}</span>
              {!collapsed && <span className="label">{item.label}</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="toggles">
        <button
          className="toggle"
          onClick={() => onSelect("Settings")}
        >
          ⚙ <div className="label">{collapsed ? "" : "Settings"} </div>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
