import React, { FC } from "react";
  import SoftwareUpdates from "../SoftwareUpdates";
  
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
        <SoftwareUpdates width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  