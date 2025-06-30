import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import '../styles/Reports.css';

// Define translations for Reports
const reportsTranslations = {
  English: {
    reportsFor: "Reports for",
    welcomeSummary: "Welcome, {username}! Here's a summary of your recent activities and system insights.",
    totalProjects: "Total Projects",
    completedProjects: "Completed Projects",
    pendingActivities: "Pending Activities",
    usersManaged: "Users Managed",
    teamMembers: "Team Members",
    tasksCompleted: "Tasks Completed",
    recentActivity: "Recent Activity",
    generateDetailedReport: "Generate Detailed Report",
    adminActivity: "Reviewed Q2 performance report.",
    managerActivity: "Approved project XYZ budget.",
    staffActivity: "Submitted daily activity log.",
  },
  Amharic: {
    reportsFor: "ሪፖርቶች ለ",
    welcomeSummary: "እንኳን ደህና መጡ, {username}! የቅርብ ጊዜ እንቅስቃሴዎችዎ እና የስርዓት ግንዛቤዎችዎ ማጠቃለያ እዚህ አለ።",
    totalProjects: "ጠቅላላ ፕሮጀክቶች",
    completedProjects: "የተጠናቀቁ ፕሮጀክቶች",
    pendingActivities: "በመጠባበቅ ላይ ያሉ እንቅስቃሴዎች",
    usersManaged: "የሚተዳደሩ ተጠቃሚዎች",
    teamMembers: "የቡድን አባላት",
    tasksCompleted: "የተጠናቀቁ ተግባራት",
    recentActivity: "የቅርብ ጊዜ እንቅስቃሴ",
    generateDetailedReport: "ዝርዝር ሪፖርት ይፍጠሩ",
    adminActivity: "የQ2 የአፈጻጸም ሪፖርትን ገምግሟል።",
    managerActivity: "የፕሮጀክት XYZ በጀትን አጽድቋል።",
    staffActivity: "ዕለታዊ የእንቅስቃሴ ምዝግብ ማስታወሻ አስገብቷል።",
  },
  Oromo: {
    reportsFor: "Gabaasaa",
    welcomeSummary: "Nagaan Gali, {username}! Asitti cuunfaa hojiiwwan kee dhihoo fi hubannoo sirnaa argatta.",
    totalProjects: "Pirojektiiwwan Waliigalaa",
    completedProjects: "Pirojektiiwwan Xumuraman",
    pendingActivities: "Hojiiwwan Eegaman",
    usersManaged: "Fayyadamtoota Bulchaman",
    teamMembers: "Miseensota Garee",
    tasksCompleted: "Hojiiwwan Xumuraman",
    recentActivity: "Hojii Dhihoo",
    generateDetailedReport: "Gabaasa Bal'aa Uumi",
    adminActivity: "Gabaasa hojii Q2 irra deebi'ee ilaaleera.",
    managerActivity: "Baajata pirojektii XYZ mirkaneesseera.",
    staffActivity: "Galmee hojii guyyaa galcheera.",
  },
};

const Reports = ({ username }) => {
  const { currentLanguage } = useContext(LanguageContext);
  const translations = reportsTranslations[currentLanguage] || reportsTranslations.English;

  const generateDummyReportData = (user) => {
    const data = {
      admin: {
        totalProjects: 150,
        completedProjects: 120,
        pendingActivities: 30,
        usersManaged: 50,
        recentActivity: translations.adminActivity,
      },
      manager: {
        totalProjects: 50,
        completedProjects: 40,
        pendingActivities: 15,
        teamMembers: 10,
        recentActivity: translations.managerActivity,
      },
      staff: {
        totalProjects: 10,
        completedProjects: 8,
        pendingActivities: 5,
        tasksCompleted: 25,
        recentActivity: translations.staffActivity,
      },
    };
    return data[user] || data.staff;
  };

  const reportData = generateDummyReportData(username);

  return (
    <div className="reports-container">
      <h1 className="reports-title">{translations.reportsFor} {username || 'User'}</h1>

      <p className="reports-intro" dangerouslySetInnerHTML={{ __html: translations.welcomeSummary.replace('{username}', `<span class="reports-username-highlight">${username}</span>`) }} />

      <div className="report-cards-grid">
        <div className="report-card blue-card">
          <div className="report-icon">📈</div>
          <h3 className="report-card-title">{translations.totalProjects}</h3>
          <p className="report-card-value">{reportData.totalProjects}</p>
        </div>

        <div className="report-card green-card">
          <div className="report-icon">✅</div>
          <h3 className="report-card-title">{translations.completedProjects}</h3>
          <p className="report-card-value">{reportData.completedProjects}</p>
        </div>

        <div className="report-card yellow-card">
          <div className="report-icon">⏳</div>
          <h3 className="report-card-title">{translations.pendingActivities}</h3>
          <p className="report-card-value">{reportData.pendingActivities}</p>
        </div>

        {username === 'admin' && (
          <div className="report-card purple-card">
            <div className="report-icon">👥</div>
            <h3 className="report-card-title">{translations.usersManaged}</h3>
            <p className="report-card-value">{reportData.usersManaged}</p>
          </div>
        )}

        {username === 'manager' && (
          <div className="report-card orange-card">
            <div className="report-icon">🤝</div>
            <h3 className="report-card-title">{translations.teamMembers}</h3>
            <p className="report-card-value">{reportData.teamMembers}</p>
          </div>
        )}

        {username === 'staff' && (
          <div className="report-card red-card">
            <div className="report-icon">✏️</div>
            <h3 className="report-card-title">{translations.tasksCompleted}</h3>
            <p className="report-card-value">{reportData.tasksCompleted}</p>
          </div>
        )}
      </div>

      <div className="recent-activity-section">
        <h3 className="section-title">{translations.recentActivity}</h3>
        <p className="recent-activity-text">{reportData.recentActivity}</p>
      </div>

      <button className="generate-report-button">
        {translations.generateDetailedReport}
      </button>
    </div>
  );
};

export default Reports;