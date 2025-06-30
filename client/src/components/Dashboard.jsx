
import '../styles/Dashboard.css';


const Dashboard = ({ username }) => {

    console.log(username)
  
  const renderDashboardContent = () => {
    switch (username) {
      case 'admin':
        return (
          <div className="dashboard-card admin-dashboard">
            <h2>Admin Dashboard Overview</h2>
            <p>Welcome, Administrator! Here you can manage all aspects of the system.</p>
            <div className="dashboard-stats">
              <div className="stat-item">
                <h3>Total Users</h3>
                <p>150</p>
              </div>
              <div className="stat-item">
                <h3>Active Projects</h3>
                <p>25</p>
              </div>
              <div className="stat-item">
                <h3>Pending Reports</h3>
                <p>7</p>
              </div>
            </div>
            <button className="dashboard-action-button">Manage Users</button>
            <button className="dashboard-action-button">View System Logs</button>
          </div>
        );
      case 'manager':
        return (
          <div className="dashboard-card manager-dashboard">
            <h2>Manager Dashboard Overview</h2>
            <p>Welcome, Manager! Oversee your team's projects and activities.</p>
            <div className="dashboard-stats">
              <div className="stat-item">
                <h3>Team Members</h3>
                <p>12</p>
              </div>
              <div className="stat-item">
                <h3>Ongoing Projects</h3>
                <p>8</p>
              </div>
              <div className="stat-item">
                <h3>Tasks Due Today</h3>
                <p>3</p>
              </div>
            </div>
            <button className="dashboard-action-button">Assign Tasks</button>
            <button className="dashboard-action-button">Review Team Progress</button>
          </div>
        );
      case 'staff':
        return (
          <div className="dashboard-card staff-dashboard">
            <h2>Staff Dashboard Overview</h2>
            <p>Welcome, Staff Member! Here's a summary of your current tasks and activities.</p>
            <div className="dashboard-stats">
              <div className="stat-item">
                <h3>My Current Tasks</h3>
                <p>5</p>
              </div>
              <div className="stat-item">
                <h3>Completed Activities</h3>
                <p>15</p>
              </div>
              <div className="stat-item">
                <h3>Upcoming Deadlines</h3>
                <p>2</p>
              </div>
            </div>
            <button className="dashboard-action-button">View My Projects</button>
            <button className="dashboard-action-button">Log New Activity</button>
          </div>
        );
      default:
        return (
          <div className="dashboard-card default-dashboard">
            <h2>Welcome to Your Dashboard!</h2>
            <p>Please log in to see your personalized content.</p>
            <p>If you are logged in and still see this message, there might be an issue with your role assignment.</p>
          </div>
        );
    }
  };

  return (
    <div className="dashboard-container">
      {renderDashboardContent()}
    </div>
  );
};

export default Dashboard;
