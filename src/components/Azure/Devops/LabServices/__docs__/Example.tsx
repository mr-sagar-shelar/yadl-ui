import React, { FC } from "react";
  import LabServices from "../LabServices";
  
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
        <LabServices width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  