import React, { FC } from "react";
  import ConnectingTeams from "../ConnectingTeams";
  
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
        <ConnectingTeams width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  