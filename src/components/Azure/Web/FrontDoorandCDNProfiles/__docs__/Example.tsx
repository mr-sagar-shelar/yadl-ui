import React, { FC } from "react";
  import FrontDoorandCDNProfiles from "../FrontDoorandCDNProfiles";
  
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
        <FrontDoorandCDNProfiles width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  