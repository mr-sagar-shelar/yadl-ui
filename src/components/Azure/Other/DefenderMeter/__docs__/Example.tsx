import React, { FC } from "react";
  import DefenderMeter from "../DefenderMeter";
  
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
        <DefenderMeter width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  