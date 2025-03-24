import React, { FC } from "react";
  import MissionLandingZone from "../MissionLandingZone";
  
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
        <MissionLandingZone width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  