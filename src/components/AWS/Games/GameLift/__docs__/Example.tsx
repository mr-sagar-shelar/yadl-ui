import React, { FC } from "react";
  import GameLift from "../GameLift";
  
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
        <GameLift width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  