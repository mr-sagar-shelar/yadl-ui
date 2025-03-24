import React, { FC } from "react";
  import TimeManagement from "../TimeManagement";
  
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
        <TimeManagement width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  