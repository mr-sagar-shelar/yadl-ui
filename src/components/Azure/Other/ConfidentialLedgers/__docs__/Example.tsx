import React, { FC } from "react";
  import ConfidentialLedgers from "../ConfidentialLedgers";
  
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
        <ConfidentialLedgers width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  