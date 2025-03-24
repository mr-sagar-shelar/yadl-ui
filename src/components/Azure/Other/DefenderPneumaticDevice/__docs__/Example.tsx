import React, { FC } from "react";
  import DefenderPneumaticDevice from "../DefenderPneumaticDevice";
  
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
        <DefenderPneumaticDevice width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  