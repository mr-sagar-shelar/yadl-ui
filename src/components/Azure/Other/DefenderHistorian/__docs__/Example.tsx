import React, { FC } from "react";
  import DefenderHistorian from "../DefenderHistorian";
  
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
        <DefenderHistorian width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  