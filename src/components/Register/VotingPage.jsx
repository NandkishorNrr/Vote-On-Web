import React from "react";
import { Link } from "react-router-dom";

function VotingPage({ handleVote }) {
  return (
    <div className="flex flex-col mt-4">
      <h2 className="text-2xl font-semibold mb-4">Voting Page</h2>
      <p>
        Click the button below to vote for your preferred candidate from the
        list.
      </p>
      <button
        onClick={handleVote}
        className="bg-green-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-green-700 transition ease-in-out duration-300"
      >
        Vote Now
      </button>
    </div>
  );
}

export default VotingPage;
