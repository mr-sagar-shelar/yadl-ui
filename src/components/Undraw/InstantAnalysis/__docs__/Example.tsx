import React, { FC } from "react";
  import InstantAnalysis from "../InstantAnalysis";
  
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
        <InstantAnalysis width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  