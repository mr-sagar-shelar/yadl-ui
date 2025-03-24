import React, { FC } from "react";
  import OutdoorParty from "../OutdoorParty";
  
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
        <OutdoorParty width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  