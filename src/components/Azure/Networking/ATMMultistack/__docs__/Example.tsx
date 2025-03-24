import React, { FC } from "react";
  import ATMMultistack from "../ATMMultistack";
  
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
        <ATMMultistack width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  