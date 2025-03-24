import React, { FC } from "react";
  import VotingVoting from "../VotingVoting";
  
  const Example = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <VotingVoting width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  