import React, { FC } from "react";
  import DefenderHMI from "../DefenderHMI";
  
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
        <DefenderHMI width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  