import React, { FC } from "react";
  import MobilePay from "../MobilePay";
  
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
        <MobilePay width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  