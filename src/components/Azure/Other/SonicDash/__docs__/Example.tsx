import React, { FC } from "react";
  import SonicDash from "../SonicDash";
  
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
        <SonicDash width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  