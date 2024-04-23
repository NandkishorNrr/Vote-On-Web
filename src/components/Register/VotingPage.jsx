import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import parties from "./partiesCandidates";
import dummyPeople, { functionTake } from "./dummyPeople";

function VotingPage() {
  const { adharNo } = useParams();
  const navigate = useNavigate();
  const [voter, setVoter] = useState("");
  const [voterID, setVoterID] = useState("");
  const [voted, setVoted] = useState(false);
  const [selectedParty, setSelectedParty] = useState(null);
  const [selectedPartyFlag, setSelectedPartyFlag] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  const handleVoteClick = (partyName, partyFlag) => {
    setVoted(true);
    setSelectedParty(partyName);
    setSelectedPartyFlag(partyFlag);
    handleVote(partyName, adharNo);
    setShowPopup(true);
    functionTake(adharNo);
  };

  const handleVote = (partyName, adharNo) => {
    if (!userDetails.voted) {
      dummyPeople.forEach((person) => {
        if (person.aadharNo === adharNo) {
          person.voted = true;
        }
      });
      navigate(`/voting-page/${adharNo}`);
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    const user = dummyPeople.find((person) => person.aadharNo === adharNo);
    setUserDetails(user);
    setVoter(user.fullName);
    setVoterID(user.voterId);
  }, [adharNo]);

  return (
    <div className="flex flex-col mt-4 ">
      <h2 className="text-2xl text-orange-600 font-semibold mb-1">
        Voting Page
      </h2>
      <p className="text-2xl text-green-600 font-bold mb-2">
        Dear voter, with voter ID: {voterID}{" "}
      </p>
      <p className="text-lg text-blue-600 ">
        Click the button below to vote for your preferred candidate from the
        list..!
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
                      (selectedParty && selectedParty !== party.partyName) ||
                      userDetails.voted
                    }
                    partyFlag={party.partyFlag}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-orange-400 text-white rounded-lg p-4 max-w-lg text-center">
            <div>
              <p>{voter}, Voted to</p>
              <p>
                <img
                  src={selectedPartyFlag}
                  alt={`${selectedParty} Flag`}
                  className="w-8 h-8 mr-2 inline"
                />
              </p>
              <p>{selectedParty}</p>
              Successfuly!
            </div>
            <button
              onClick={() => {
                setShowPopup(false);
                navigate("/");
              }}
              className="bg-green-700 hover:bg-orange-700 text-grey-600 m-4 font-bold py-2 px-4 rounded"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function PartyButton({ partyName, handleVoteClick, disabled, partyFlag }) {
  return (
    <button
      onClick={() => handleVoteClick(partyName, partyFlag)}
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
