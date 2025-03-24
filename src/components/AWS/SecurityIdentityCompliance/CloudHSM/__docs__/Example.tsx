import React, { FC } from "react";
  import CloudHSM from "../CloudHSM";
  
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
        <CloudHSM width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  