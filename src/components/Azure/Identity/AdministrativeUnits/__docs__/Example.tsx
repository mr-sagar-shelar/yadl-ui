import React, { FC } from "react";
  import AdministrativeUnits from "../AdministrativeUnits";
  
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
        <AdministrativeUnits width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  