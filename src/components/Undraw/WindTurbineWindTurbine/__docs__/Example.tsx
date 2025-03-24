import React, { FC } from "react";
  import WindTurbineWindTurbine from "../WindTurbineWindTurbine";
  
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
        <WindTurbineWindTurbine width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  