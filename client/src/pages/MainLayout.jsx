import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import Reports from '../components/Reports';
import Projects from '../components/Projects';
import Activities from '../components/Activities';
import Settings from '../components/Settings';
import '../styles/MainLayout.css';

const componentMap = {
  Dashboard: <Dashboard />,
  Reports: <Reports />,
  Projects: <Projects />,
  Activities: <Activities />,
  Settings: <Settings />
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

  ],
  staff: [
    { label: 'Dashboard', icon: '📊' },
    { label: 'Activities', icon: '🏃' },

  ],
};

const MainLayout = ({ role }) => {
  const [activeComponent, setActiveComponent] = useState('Dashboard');
  const sidebarItems = sidebarItemsByRole[role] || [];

  return (
    <div className="main-layout">
      <Sidebar items={sidebarItems} onSelect={setActiveComponent} />
      <main className="main-content">
        {componentMap[activeComponent]}
      </main>
    </div>
  );
};

export default MainLayout;
