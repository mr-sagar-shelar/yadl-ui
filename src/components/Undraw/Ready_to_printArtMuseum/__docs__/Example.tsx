import React, { FC } from "react";
  import Ready_to_printArtMuseum from "../Ready_to_printArtMuseum";
  
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
        <Ready_to_printArtMuseum width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  