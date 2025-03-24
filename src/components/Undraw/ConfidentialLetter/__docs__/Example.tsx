import React, { FC } from "react";
  import ConfidentialLetter from "../ConfidentialLetter";
  
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
        <ConfidentialLetter width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  