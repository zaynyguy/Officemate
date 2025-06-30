import React from "react";
import "../styles/ProgressBar.css";

export default function ProgressBar({ value, max = 100 }) {
  const percentage = Math.min(Math.max(value, 0), max);

  // Determine fill color based on percentage
  const getFillColor = (percent) => {
    if (percent < 30) {
      return 'var(--progress-low)'; // Red
    } else if (percent < 70) {
      return 'var(--progress-medium)'; // Orange/Yellow
    } else {
      return 'var(--progress-high)'; // Green
    }
  };

  const fillColor = getFillColor(percentage);

  return (
    <div className="progress-bar">
      <div
        className="progress-fill"
        style={{
          width: `${(percentage / max) * 100}%`,
          backgroundColor: fillColor, // Apply dynamic color
        }}
      />
      <span className="progress-label">{percentage}%</span>
    </div>
  );
}
