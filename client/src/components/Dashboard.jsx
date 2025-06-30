import React, { useContext } from 'react'; // Import useContext
import { LanguageContext } from '../contexts/LanguageContext'; // Import LanguageContext
import '../styles/Dashboard.css';

// Define translations for Dashboard
const dashboardTranslations = {
  English: {
    adminDashboardOverview: "Admin Dashboard Overview",
    welcomeAdministrator: "Welcome, Administrator! Here you can manage all aspects of the system.",
    totalUsers: "Total Users",
    activeProjects: "Active Projects",
    pendingReports: "Pending Reports",
    manageUsers: "Manage Users",
    viewSystemLogs: "View System Logs",

    managerDashboardOverview: "Manager Dashboard Overview",
    welcomeManager: "Welcome, Manager! Oversee your team's projects and activities.",
    teamMembers: "Team Members",
    ongoingProjects: "Ongoing Projects",
    tasksDueToday: "Tasks Due Today",
    assignTasks: "Assign Tasks",
    reviewTeamProgress: "Review Team Progress",

    staffDashboardOverview: "Staff Dashboard Overview",
    welcomeStaff: "Welcome, Staff Member! Here's a summary of your current tasks and activities.",
    myCurrentTasks: "My Current Tasks",
    completedActivities: "Completed Activities",
    upcomingDeadlines: "Upcoming Deadlines",
    viewMyProjects: "View My Projects",
    logNewActivity: "Log New Activity",

    welcomeToDashboard: "Welcome to Your Dashboard!",
    pleaseLogIn: "Please log in to see your personalized content.",
    issueWithRole: "If you are logged in and still see this message, there might be an issue with your role assignment.",
  },
  Amharic: {
    adminDashboardOverview: "የአድሚን ዳሽቦርድ አጠቃላይ እይታ",
    welcomeAdministrator: "እንኳን ደህና መጡ አስተዳዳሪ! እዚህ የስርዓቱን ሁሉንም ገጽታዎች ማስተዳደር ይችላሉ።",
    totalUsers: "ጠቅላላ ተጠቃሚዎች",
    activeProjects: "ንቁ ፕሮጀክቶች",
    pendingReports: "በመጠባበቅ ላይ ያሉ ሪፖርቶች",
    manageUsers: "ተጠቃሚዎችን ያቀናብሩ",
    viewSystemLogs: "የስርዓት ምዝግብ ማስታወሻዎችን ይመልከቱ",

    managerDashboardOverview: "የአስተዳዳሪ ዳሽቦርድ አጠቃላይ እይታ",
    welcomeManager: "እንኳን ደህና መጡ ስራ አስኪያጅ! የቡድንዎን ፕሮጀክቶች እና እንቅስቃሴዎች ይቆጣጠሩ።",
    teamMembers: "የቡድን አባላት",
    ongoingProjects: "በሂደት ላይ ያሉ ፕሮጀክቶች",
    tasksDueToday: "ዛሬ የሚጠናቀቁ ተግባራት",
    assignTasks: "ተግባሮችን ይመድቡ",
    reviewTeamProgress: "የቡድን እድገትን ይገምግሙ",

    staffDashboardOverview: "የሰራተኛ ዳሽቦርድ አጠቃላይ እይታ",
    welcomeStaff: "እንኳን ደህና መጡ ሰራተኛ! የአሁን ተግባራትዎ እና እንቅስቃሴዎችዎ ማጠቃለያ እዚህ አለ።",
    myCurrentTasks: "የእኔ የአሁን ተግባራት",
    completedActivities: "የተጠናቀቁ እንቅስቃሴዎች",
    upcomingDeadlines: "የሚመጡ የጊዜ ገደቦች",
    viewMyProjects: "የእኔን ፕሮጀክቶች ይመልከቱ",
    logNewActivity: "አዲስ እንቅስቃሴ ይመዝግቡ",

    welcomeToDashboard: "ወደ ዳሽቦርድዎ እንኳን ደህና መጡ!",
    pleaseLogIn: "የግል ይዘትዎን ለማየት እባክዎ ይግቡ።",
    issueWithRole: "ከገቡ እና አሁንም ይህን መልእክት ካዩ፣ ሚናዎ ላይ ችግር ሊኖር ይችላል።",
  },
  Oromo: {
    adminDashboardOverview: "Cuunfaa Daashboordii Bulchiinsaa",
    welcomeAdministrator: "Nagaan Gali, Bulchaa! Asitti kallattiiwwan sirnaa hunda bulchuu dandeessa.",
    totalUsers: "Fayyadamtoota Waliigalaa",
    activeProjects: "Pirojektiiwwan Hojii Irra Jiran",
    pendingReports: "Gabaasawwan Eegaman",
    manageUsers: "Fayyadamtoota Bulchi",
    viewSystemLogs: "Galmeewwan Sirnaa Ilaali",

    managerDashboardOverview: "Cuunfaa Daashboordii Bulchaa",
    welcomeManager: "Nagaan Gali, Bulchaa! Pirojektiiwwan garee keetii fi hojiiwwan isaanii to'adhu.",
    teamMembers: "Miseensota Garee",
    ongoingProjects: "Pirojektiiwwan Itti Fufan",
    tasksDueToday: "Hojiiwwan Har'a Xumuraman",
    assignTasks: "Hojiiwwan Kennaa",
    reviewTeamProgress: "Tarkaanfii Garee Ilaali",

    staffDashboardOverview: "Cuunfaa Daashboordii Hojjataa",
    welcomeStaff: "Nagaan Gali, Hojjataa! Asitti cuunfaa hojiiwwan kee ammaa fi hojiiwwan kee argatta.",
    myCurrentTasks: "Hojiiwwan Koo Ammaa",
    completedActivities: "Hojiiwwan Xumuraman",
    upcomingDeadlines: "Yeroowwan Dhumaa Dhufan",
    viewMyProjects: "Pirojektiiwwan Koo Ilaali",
    logNewActivity: "Hojii Haaraa Galmeessi",

    welcomeToDashboard: "Gara Daashboordii Keetiitti Nagaan Gali!",
    pleaseLogIn: "Yoo xumura kee ilaaluu barbaadde, seenaa.",
    issueWithRole: "Yoo seentee ammas ergaa kana argite, rakkoon ga'ee kee irratti jiraachuu mala.",
  },
};


const Dashboard = ({ role, username }) => { // Ensure 'role' is received here
  const { currentLanguage } = useContext(LanguageContext); // Get current language from context
  const translations = dashboardTranslations[currentLanguage] || dashboardTranslations.English;

  const renderDashboardContent = () => {
    switch (role) { // Use 'role' for conditional rendering
      case 'admin':
        return (
          <div className="dashboard-card admin-dashboard">
            <h2>{translations.adminDashboardOverview}</h2>
            <p>{translations.welcomeAdministrator}</p>
            <div className="dashboard-stats">
              <div className="stat-item">
                <h3>{translations.totalUsers}</h3>
                <p>150</p>
              </div>
              <div className="stat-item">
                <h3>{translations.activeProjects}</h3>
                <p>25</p>
              </div>
              <div className="stat-item">
                <h3>{translations.pendingReports}</h3>
                <p>7</p>
              </div>
            </div>
            <button className="dashboard-action-button">{translations.manageUsers}</button>
            <button className="dashboard-action-button">{translations.viewSystemLogs}</button>
          </div>
        );
      case 'manager':
        return (
          <div className="dashboard-card manager-dashboard">
            <h2>{translations.managerDashboardOverview}</h2>
            <p>{translations.welcomeManager}</p>
            <div className="dashboard-stats">
              <div className="stat-item">
                <h3>{translations.teamMembers}</h3>
                <p>12</p>
              </div>
              <div className="stat-item">
                <h3>{translations.ongoingProjects}</h3>
                <p>8</p>
              </div>
              <div className="stat-item">
                <h3>{translations.tasksDueToday}</h3>
                <p>3</p>
              </div>
            </div>
            <button className="dashboard-action-button">{translations.assignTasks}</button>
            <button className="dashboard-action-button">{translations.reviewTeamProgress}</button>
          </div>
        );
      case 'staff':
        return (
          <div className="dashboard-card staff-dashboard">
            <h2>{translations.staffDashboardOverview}</h2>
            <p>{translations.welcomeStaff}</p>
            <div className="dashboard-stats">
              <div className="stat-item">
                <h3>{translations.myCurrentTasks}</h3>
                <p>5</p>
              </div>
              <div className="stat-item">
                <h3>{translations.completedActivities}</h3>
                <p>15</p>
              </div>
              <div className="stat-item">
                <h3>{translations.upcomingDeadlines}</h3>
                <p>2</p>
              </div>
            </div>
            <button className="dashboard-action-button">{translations.viewMyProjects}</button>
            <button className="dashboard-action-button">{translations.logNewActivity}</button>
          </div>
        );
      default:
        return (
          <div className="dashboard-card default-dashboard">
            <h2>{translations.welcomeToDashboard}</h2>
            <p>{translations.pleaseLogIn}</p>
            <p>{translations.issueWithRole}</p>
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