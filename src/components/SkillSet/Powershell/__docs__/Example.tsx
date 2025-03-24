import React, { FC } from "react";
  import Powershell from "../Powershell";
  
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
        <Powershell width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  