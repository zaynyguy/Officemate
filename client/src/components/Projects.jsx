import React, { useState, useEffect, useRef, useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext"; // Import LanguageContext
import ProgressBar from "./ProgressBar"; // Assuming ProgressBar component exists and works
import "../styles/Projects.css";

// Define translations for the Projects component
const projectsTranslations = {
  English: {
    planAndTaskExecution: "Plan and Task Execution",
    addGoals: "Add Goals",
    goal1Title: "Goal 1: Enhance Institutional Capacity",
    planPreparation: "1.1 Plan Preparation, Monitoring & Evaluation",
    taskSubtask: "Task / Sub-task",
    annualGoal: "Annual Goal",
    q1: "Q1",
    q2: "Q2",
    q3: "Q3",
    q4: "Q4",
    progress: "Progress",
    action: "Action",
    preparePlanDoc: "Prepare timely plan document",
    edit: "Edit",
    goal3Title: "Goal 3: Demand-Based Land Supply",
    prepareLand: "3.1 Prepare land for various services",
    clearHoldings: "Clear existing holdings",
    goal5Title: "Goal 5: Ensure Building Safety",
    improvePermit: "5.1 Improve Construction Permit Issuance",
    issuePermits: "Issue new construction permits",
    haveNiceDay: "Have a Nice Day",
    keepUpGoodWork: "Keep Up the Good Work",
  },
  Amharic: {
    planAndTaskExecution: "የእቅድ እና ተግባር አፈፃፀም",
    addGoals: "ግብ ጨምር",
    goal1Title: "ግብ 1፡ የተቋማዊ አቅም ማሳደግ",
    planPreparation: "1.1 የእቅድ ዝግጅት፣ ክትትል እና ግምገማ",
    taskSubtask: "ተግባር / ንዑስ ተግባር",
    annualGoal: "ዓመታዊ ግብ",
    q1: "ሩብ 1",
    q2: "ሩብ 2",
    q3: "ሩብ 3",
    q4: "ሩብ 4",
    progress: "እድገት",
    action: "ድርጊት",
    preparePlanDoc: "ወቅታዊ የእቅድ ሰነድ አዘጋጅ",
    edit: "አርትዕ",
    goal3Title: "ግብ 3፡ በፍላጎት ላይ የተመሰረተ የመሬት አቅርቦት",
    prepareLand: "3.1 ለተለያዩ አገልግሎቶች መሬት አዘጋጅ",
    clearHoldings: "ነባር ይዞታዎችን አጽዳ",
    goal5Title: "ግብ 5፡ የህንፃ ደህንነትን ማረጋገጥ",
    improvePermit: "5.1 የግንባታ ፈቃድ አሰጣጥን ማሻሻል",
    issuePermits: "አዲስ የግንባታ ፈቃዶችን ስጥ",
    haveNiceDay: "መልካም ቀን ይሁንልዎ",
    keepUpGoodWork: "ጥሩ ስራዎን ይቀጥሉ",
  },
  Oromo: {
    planAndTaskExecution: "Karooraa fi Hojii Raawwachuu",
    addGoals: "Galma Dabali",
    goal1Title: "Galma 1: Dandeettii Dhaabbataa Guddisuu",
    planPreparation: "1.1 Qophii Karooraa, To'annaa fi Gamaggama",
    taskSubtask: "Hojii / Hojii Xiqqaa",
    annualGoal: "Galma Waggaa",
    q1: "Q1",
    q2: "Q2",
    q3: "Q3",
    q4: "Q4",
    progress: "Guddiina",
    action: "Hojii",
    preparePlanDoc: "Sanada karooraa yeroon qopheessi",
    edit: "Sirreessi",
    goal3Title: "Galma 3: Dhiyeessii Lafa Fedhii irratti Hundaa'e",
    prepareLand: "3.1 Lafaa tajaajila adda addaatiif qopheessi",
    clearHoldings: "Qabeenya jiru qulqulleessi",
    goal5Title: "Galma 5: Nageenya Ijaarsaa Mirkaneessuu",
    improvePermit: "5.1 Kenniinsa Heeyyama Ijaarsaa Fooyyessuu",
    issuePermits: "Heeyyama ijaarsaa haaraa kenni",
    haveNiceDay: "Guyyaa Gaarii Qabaadhu",
    keepUpGoodWork: "Hojii Gaarii Keessan Itti Fufaa",
  },
};

export default function Projects() { // Renamed from Goal to Projects
  const { currentLanguage } = useContext(LanguageContext);
  const translations = projectsTranslations[currentLanguage] || projectsTranslations.English;

  return (
    <>
      <div className="mainBody">
        <div className="planPage">
          <h1>{translations.planAndTaskExecution}</h1>
          <button className="addGoalButton"> ➕ {translations.addGoals}</button>
        </div>
        <div className="container">
          <details className="Goal">
            <summary className="titles">
              <h2>{translations.goal1Title}</h2>
            </summary>
            <h3 className="subTitles">{translations.planPreparation}</h3>
            <table className="TableClass">
              <thead>
                <tr>
                  <th>{translations.taskSubtask}</th>
                  <th>{translations.annualGoal}</th>
                  <th>{translations.q1}</th>
                  <th>{translations.q2}</th>
                  <th>{translations.q3}</th>
                  <th>{translations.q4}</th>
                  <th>{translations.progress}</th>
                  <th>{translations.action}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{translations.preparePlanDoc}</td> {/* Changed from <th> to <td> */}
                  <td>2 Number</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                  <td>0</td>
                  <td><ProgressBar value={50} /></td>
                  <td><button className="editing">📝{translations.edit}</button></td> {/* Wrapped button in <td> */}
                </tr>
              </tbody>
            </table>
          </details>
          <details className="Goal">
            <summary className="titles">
              <h2>{translations.goal3Title}</h2>
            </summary>
            <h3 className="subTitles">{translations.prepareLand}</h3>
            <table className="TableClass">
              <thead>
                <tr>
                  <th>{translations.taskSubtask}</th>
                  <th>{translations.annualGoal}</th>
                  <th>{translations.q1}</th>
                  <th>{translations.q2}</th>
                  <th>{translations.q3}</th>
                  <th>{translations.q4}</th>
                  <th>{translations.progress}</th>
                  <th>{translations.action}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{translations.clearHoldings}</td> {/* Changed from <th> to <td> */}
                  <td>33.5 Hectare</td>
                  <td>5</td>
                  <td>8</td>
                  <td>10</td>
                  <td>10.5</td>
                  <td><ProgressBar value={45} /></td>
                  <td><button className="editing">📝{translations.edit}</button></td> {/* Wrapped button in <td> */}
                </tr>
              </tbody>
            </table>
          </details>
          <details className="Goal">
            <summary className="titles">
              <h2>{translations.goal5Title}</h2>
            </summary>
            <h3 className="subTitles">{translations.improvePermit}</h3>
            <table className="TableClass">
              <thead>
                <tr>
                  <th>{translations.taskSubtask}</th>
                  <th>{translations.annualGoal}</th>
                  <th>{translations.q1}</th>
                  <th>{translations.q2}</th>
                  <th>{translations.q3}</th>
                  <th>{translations.q4}</th>
                  <th>{translations.progress}</th>
                  <th>{translations.action}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{translations.issuePermits}</td> {/* Changed from <th> to <td> */}
                  <td>1,400 Number</td>
                  <td>150</td>
                  <td>150</td>
                  <td>150</td>
                  <td>150</td>
                  <td><ProgressBar value={100} /></td>
                  <td><button className="editing">📝{translations.edit}</button></td> {/* Wrapped button in <td> */}
                </tr>
              </tbody>
            </table>
          </details>
        </div>
        {/* <h1>{translations.haveNiceDay}</h1>
        <h1>{translations.keepUpGoodWork}</h1> */}
      </div>
    </>
  );
}
