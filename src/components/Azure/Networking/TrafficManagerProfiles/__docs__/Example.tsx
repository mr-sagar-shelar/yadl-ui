import React, { FC } from "react";
  import TrafficManagerProfiles from "../TrafficManagerProfiles";
  
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
        <TrafficManagerProfiles width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  