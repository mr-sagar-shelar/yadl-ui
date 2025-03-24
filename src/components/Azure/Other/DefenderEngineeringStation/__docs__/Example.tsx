import React, { FC } from "react";
  import DefenderEngineeringStation from "../DefenderEngineeringStation";
  
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
        <DefenderEngineeringStation width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  