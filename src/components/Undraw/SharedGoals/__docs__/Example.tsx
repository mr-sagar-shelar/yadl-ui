import React, { FC } from "react";
  import SharedGoals from "../SharedGoals";
  
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
        <SharedGoals width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  