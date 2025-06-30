import { useState } from "react";
import "../styles/Sidebar.css";

const Sidebar = ({ onSelect, items }) => {
  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
    setDarkMode(document.body.classList.contains("dark-mode"));
  };

  return (
    <aside className="sidebar">
      <div>
        {items.map((item) => (
          <button key={item} onClick={() => onSelect(item)}>
            {item}
          </button>
        ))}
      </div>
      <button onClick={toggleTheme} className="toggle-theme">
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
    </aside>
  );
};

export default Sidebar;
