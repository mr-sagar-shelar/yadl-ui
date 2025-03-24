import React, { FC } from "react";
  import HealthyLifestyle from "../HealthyLifestyle";
  
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
        <HealthyLifestyle width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  