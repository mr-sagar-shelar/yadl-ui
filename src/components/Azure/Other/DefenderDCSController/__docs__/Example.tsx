import React, { FC } from "react";
  import DefenderDCSController from "../DefenderDCSController";
  
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
        <DefenderDCSController width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  