import React, { useState } from "react";
import { Link } from "react-router-dom";
import parties from "./partiesCandidates.js";

function VotingPage({ handleVote }) {
  const [voted, setVoted] = useState(false);
  const [selectedParty, setSelectedParty] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleVoteClick = (partyName) => {
    setVoted(true);
    setSelectedParty(partyName);
    handleVote(partyName);
    setShowPopup(true);
  };

  return (
    <div className="flex flex-col mt-4 ">
      <h2 className="text-2xl font-semibold mb-4">Voting Page</h2>
      <p>
        Click the button below to vote for your preferred candidate from the
        list.
      </p>
      <div className="flex justify-center items-center my-4 h-full">
        <table className="border bg-orange-200 border-gray-600 w-full md:w-2/3 lg:w-1/2 rounded-lg overflow-hidden">
          <thead>
            <tr className="border border-gray-600">
              <th className="border border-gray-600 px-4 py-2">Party</th>
              <th className="border border-gray-600 px-4 py-2">Candidate</th>
              <th className="border border-gray-600 px-4 py-2">Vote</th>
            </tr>
          </thead>
          <tbody>
            {parties.map((party, index) => (
              <tr key={index} className="border border-gray-600">
                <td className="border border-gray-600 px-4 py-2">
                  <img
                    src={party.partyFlag}
                    alt={`${party.partyName} Flag`}
                    className="w-8 h-8 mr-2 inline"
                  />
                  {party.partyName}
                </td>
                <td className="border border-gray-600 px-4 py-2">
                  {party.candidateName}
                </td>
                <td className="border border-gray-600 px-4 py-2">
                  <PartyButton
                    partyName={party.partyName}
                    handleVoteClick={handleVoteClick}
                    disabled={
                      voted ||
                      (selectedParty && selectedParty !== party.partyName)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg p-4 max-w-sm text-center">
            <p className="mb-2">Vote Successful!</p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function PartyButton({ partyName, handleVoteClick, disabled }) {
  return (
    <button
      onClick={() => handleVoteClick(partyName)}
      disabled={disabled}
      className={`px-4 py-2 rounded ${disabled ? "  cursor-not-allowed" : ""}`}
    >
      {disabled ? (
        <img
          src="/images/VOW-CantVote.png"
          alt="Can't Vote"
          style={{ width: "35px", height: "35px", cursor: "pointer" }}
        />
      ) : (
        <img
          src="/images/VOW-CanVote.png"
          alt="Can Vote"
          style={{ width: "35px", height: "35px", cursor: "pointer" }}
        />
      )}
    </button>
  );
}

export default VotingPage;
