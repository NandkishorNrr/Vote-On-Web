// components/VotingOptions/VotingOptions.jsx
import React from "react";

function VotingOptions() {
  const votingOptions = [
    "Option 1",
    "Option 2",
    "Option 3",
    // Add more options as needed
  ];

  return (
    <div className="voting-options">
      <h2>Available Voting Options</h2>
      <ul>
        {votingOptions.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    </div>
  );
}

export default VotingOptions;
