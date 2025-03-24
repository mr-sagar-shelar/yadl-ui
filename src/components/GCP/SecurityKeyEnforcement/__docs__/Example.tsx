import React, { FC } from "react";
  import SecurityKeyEnforcement from "../SecurityKeyEnforcement";
  
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
        <SecurityKeyEnforcement width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  