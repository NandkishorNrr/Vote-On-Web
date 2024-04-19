// components/RecentVotes/RecentVotes.jsx
import React from "react";

function RecentVotes() {
  // Sample data for recent or popular votes
  const recentVotes = [
    { id: 1, title: "Vote 1", votes: 100 },
    { id: 2, title: "Vote 2", votes: 75 },
    { id: 3, title: "Vote 3", votes: 50 },
    // Add more vote objects as needed
  ];

  return (
    <div className="recent-votes">
      <h2>Recent Votes</h2>
      <ul>
        {recentVotes.map((vote) => (
          <li key={vote.id}>
            <span>{vote.title}</span>
            <span>{vote.votes} votes</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentVotes;
