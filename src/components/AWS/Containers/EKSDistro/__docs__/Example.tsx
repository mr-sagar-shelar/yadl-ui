import React, { FC } from "react";
  import EKSDistro from "../EKSDistro";
  
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
        <EKSDistro width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  