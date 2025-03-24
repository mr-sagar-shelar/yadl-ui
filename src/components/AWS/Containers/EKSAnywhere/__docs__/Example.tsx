import React, { FC } from "react";
  import EKSAnywhere from "../EKSAnywhere";
  
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
        <EKSAnywhere width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  