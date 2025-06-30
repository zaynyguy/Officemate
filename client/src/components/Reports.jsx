import React from 'react';
import '../styles/Reports.css'; // Link to the custom CSS file

const Reports = ({ username }) => {
  // Dummy data for demonstration purposes
  const generateDummyReportData = (user) => {
    const data = {
      admin: {
        totalActivities: 150,
        completedActivities: 120,
        pendingActivities: 30,
        usersManaged: 50,
        recentActivity: "Reviewed Q2 performance report.",
      },
      manager: {
        totalActivities: 50,
        completedActivities: 40,
        pendingActivities: 15,
        teamMembers: 10,
        recentActivity: "Approved project XYZ budget.",
      },
      staff: {
        totalActivities: 10,
        completedActivities: 8,
        pendingActivities: 5,
        tasksCompleted: 25,
        recentActivity: "Submitted daily activity log.",
      },
    };
    return data[user] || data.staff; // Default to staff data if user not found
  };

  const reportData = generateDummyReportData(username);

  return (
    <div className="reports-container">
      <h1 className="reports-title">Reports for {username || 'User'}</h1>

      <p className="reports-intro">
        Welcome, <span className="reports-username-highlight">{username}</span>! Here's a summary of your recent activities and system insights.
      </p>

      <div className="report-cards-grid">
        {/* Report Card: Total Activities */}
        <div className="report-card blue-card">
          <div className="report-icon">📈</div>
          <h3 className="report-card-title">Total Activities</h3>
          <p className="report-card-value">{reportData.totalActivities}</p>
        </div>

        {/* Report Card: Completed Activities */}
        <div className="report-card green-card">
          <div className="report-icon">✅</div>
          <h3 className="report-card-title">Completed Activities</h3>
          <p className="report-card-value">{reportData.completedActivities}</p>
        </div>

        {/* Report Card: Pending Activities */}
        <div className="report-card yellow-card">
          <div className="report-icon">⏳</div>
          <h3 className="report-card-title">Pending Activities</h3>
          <p className="report-card-value">{reportData.pendingActivities}</p>
        </div>

        {/* Conditional Report Cards based on role */}
        {username === 'admin' && (
          <div className="report-card purple-card">
            <div className="report-icon">👥</div>
            <h3 className="report-card-title">Users Managed</h3>
            <p className="report-card-value">{reportData.usersManaged}</p>
          </div>
        )}

        {username === 'manager' && (
          <div className="report-card orange-card">
            <div className="report-icon">🤝</div>
            <h3 className="report-card-title">Team Members</h3>
            <p className="report-card-value">{reportData.teamMembers}</p>
          </div>
        )}

        {username === 'staff' && (
          <div className="report-card red-card">
            <div className="report-icon">✏️</div>
            <h3 className="report-card-title">Tasks Completed</h3>
            <p className="report-card-value">{reportData.tasksCompleted}</p>
          </div>
        )}
      </div>

      <div className="recent-activity-section">
        <h3 className="section-title">Recent Activity</h3>
        <p className="recent-activity-text">{reportData.recentActivity}</p>
      </div>

      <button className="generate-report-button">
        Generate Detailed Report
      </button>
    </div>
  );
};

export default Reports;
