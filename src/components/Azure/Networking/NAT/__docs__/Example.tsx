import React, { FC } from "react";
  import NAT from "../NAT";
  
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
        <NAT width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  