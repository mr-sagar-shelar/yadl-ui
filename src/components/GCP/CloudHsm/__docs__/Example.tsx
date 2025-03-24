import React, { FC } from "react";
  import CloudHsm from "../CloudHsm";
  
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
        <CloudHsm width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  