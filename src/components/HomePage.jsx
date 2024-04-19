import React from "react";
import NavBar from "./NavBar/NavBar";
import VotingOptions from "./VotingOptions/VotingOptions";
import RecentVotes from "./RecentVotes/RecentVotes";

function HomePage() {
  return (
    <>
      <h1>Vote-On-Web..!</h1>
      {/* <div className="home-page">
        <NavBar />
        <div className="content">
          <VotingOptions />
          <RecentVotes />
        </div>
      </div> */}
    </>
  );
}

export default HomePage;
