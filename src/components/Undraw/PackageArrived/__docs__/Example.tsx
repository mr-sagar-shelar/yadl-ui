import React, { FC } from "react";
  import PackageArrived from "../PackageArrived";
  
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
        <PackageArrived width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  