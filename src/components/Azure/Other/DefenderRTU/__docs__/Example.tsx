import React, { FC } from "react";
  import DefenderRTU from "../DefenderRTU";
  
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
        <DefenderRTU width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  