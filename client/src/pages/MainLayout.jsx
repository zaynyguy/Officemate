import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import Reports from '../components/Reports';
import Projects from '../components/Projects';
import Activities from '../components/Activities';
import Settings from '../components/Settings';
import '../styles/MainLayout.css';

const componentMap = {
  Dashboard: (props) => <Dashboard role={props.role} username={props.username} />,
  Reports: (props) => <Reports username={props.username} />,
  Projects: <Projects />,
  Activities: <Activities />,
  Settings: (props) => <Settings username={props.username} darkMode={props.darkMode} toggleTheme={props.toggleTheme} />
};

const sidebarItemsByRole = {
  admin: [
    { label: 'Dashboard', icon: '📊' },
    { label: 'Projects', icon: '📁' },
    { label: 'Activities', icon: '🏃' },
    { label: 'Reports', icon: '📄' },
    
  ],
  manager: [
    { label: 'Dashboard', icon: '📊' },
    { label: 'Projects', icon: '📁' },
    { label: 'Activities', icon: '🏃' },
    { label: 'Reports', icon: '📄' },
    
  ],
  staff: [
    { label: 'Dashboard', icon: '📊' },
    { label: 'Activities', icon: '🏃' },
    { label: 'Reports', icon: '📄' },
    
  ],
};

const MainLayout = ({ role, username, darkMode, toggleTheme }) => {
  const [activeComponent, setActiveComponent] = useState('Dashboard');
  const sidebarItems = sidebarItemsByRole[role] || [];

  const renderActiveComponent = () => {
    const ComponentToRender = componentMap[activeComponent];
    if (typeof ComponentToRender === 'function') {
      return ComponentToRender({ role, username, darkMode, toggleTheme });
    }
    return ComponentToRender;
  };

  return (
    <div className="main-layout">
      <Sidebar items={sidebarItems} onSelect={setActiveComponent} />
      <main className="main-content">
        {renderActiveComponent()}
      </main>
    </div>
  );
};

export default MainLayout;