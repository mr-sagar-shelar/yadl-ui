import React, { FC } from "react";
  import IceLandingZone from "../IceLandingZone";
  
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
        <IceLandingZone width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  