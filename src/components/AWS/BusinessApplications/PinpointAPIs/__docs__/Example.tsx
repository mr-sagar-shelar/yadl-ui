import React, { FC } from "react";
  import PinpointAPIs from "../PinpointAPIs";
  
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
        <PinpointAPIs width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  