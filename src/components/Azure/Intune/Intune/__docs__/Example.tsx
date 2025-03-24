import React, { FC } from "react";
  import Intune from "../Intune";
  
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
        <Intune width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  