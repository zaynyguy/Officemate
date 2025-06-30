import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import Settings from '../components/Settings';
import Projects from '../components/Projects';
import Activities from '../components/Activities';
import '../styles/MainLayout.css';

const componentMap = {
  Dashboard: <Dashboard />,
  Settings: <Settings />,
  Projects: <Projects />,
  Activities: <Activities />,
};

const sidebarItemsByRole = {
  admin: ['Dashboard', 'Settings', 'Projects', 'Activities'],
  manager: ['Dashboard', 'Projects', 'Activities'],
  staff: ['Dashboard', 'Activities'],
};

const MainLayout = ({ role }) => {
  const [activeComponent, setActiveComponent] = useState('Dashboard');
  const sidebarItems = sidebarItemsByRole[role] || [];

  return (
    <div className="main-layout">
      <Sidebar onSelect={setActiveComponent} items={sidebarItems} />
      <main className="main-content">
        {componentMap[activeComponent]}
      </main>
    </div>
  );
};

export default MainLayout;
