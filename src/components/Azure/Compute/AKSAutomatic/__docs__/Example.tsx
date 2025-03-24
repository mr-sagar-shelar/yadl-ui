import React, { FC } from "react";
  import AKSAutomatic from "../AKSAutomatic";
  
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
        <AKSAutomatic width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  