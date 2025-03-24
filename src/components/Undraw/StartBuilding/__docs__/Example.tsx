import React, { FC } from "react";
  import StartBuilding from "../StartBuilding";
  
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
        <StartBuilding width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  