import React, { useState } from "react";
import { Link } from "react-router-dom";

function VotingPage({ handleVote }) {
  const [voted, setVoted] = useState(false);
  const [selectedParty, setSelectedParty] = useState(null);

  const handleVoteClick = (party) => {
    handleVote(party);
    setVoted(true);
    setSelectedParty(party);
  };

  const parties = [
    {
      partyName: "BJP",
      candidateName: "Candidate 1",
      partyFlag: "/images/BJP_Flag.svg",
    },
    {
      partyName: "INC",
      candidateName: "Candidate 2",
      partyFlag: "/images/INC_Flag.svg",
    },
    {
      partyName: "AAP",
      candidateName: "Candidate 3",
      partyFlag: "/images/AAP_Flag.svg",
    },
    {
      partyName: "BSP",
      candidateName: "Candidate 3",
      partyFlag: "/images/BSP_Flag.svg",
    },
    {
      partyName: "CPI",
      candidateName: "Candidate 5",
      partyFlag: "/images/NPP_Flag.svg",
    },
    {
      partyName: "NOTA",
      candidateName: "None Of The Above",
      partyFlag: "/images/VOW-About.png",
    },
  ];

  return (
    <div className="h-screen flex justify-center items-center bg-gray-200">
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-bold mb-2">Election Day</h1>
        <p className="text-lg mb-4">Cast Your Vote</p>
        {voted && (
          <div className="text-center mb-4">
            <p className="font-bold">
              You have voted for{" "}
              {selectedParty !== "NOTA" ? "the" : "the following"}:
            </p>
            <div className="mt-2 flex items-center justify-center">
              {selectedParty !== "NOTA" ? (
                <>
                  <img
                    src={
                      parties.find((party) => party.partyName === selectedParty)
                        .partyFlag
                    }
                    alt={`${selectedParty} Flag`}
                    className="w-8 h-8 mr-2 inline"
                  />
                  <p>{selectedParty}</p>
                  <p className="mx-2">-</p>
                  <p>
                    {
                      parties.find((party) => party.partyName === selectedParty)
                        .candidateName
                    }
                  </p>
                </>
              ) : (
                <p>{selectedParty}</p>
              )}
            </div>
          </div>
        )}
        <table className="border-collapse border border-gray-600">
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
    </div>
  );
}

const PartyButton = ({ partyName, handleVoteClick, disabled }) => {
  const handleClick = () => {
    handleVoteClick(partyName);
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-green-600 hover:bg-green-700"
      } text-white font-bold py-1 px-2 rounded-lg transition ease-in-out duration-300`}
    >
      {disabled ? "Voted" : "Vote"}
    </button>
  );
};

export default VotingPage;
