import React, { FC } from "react";
  import MobileLife from "../MobileLife";
  
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
        <MobileLife width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  