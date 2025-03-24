import React, { FC } from "react";
  import Subnet from "../Subnet";
  
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
        <Subnet width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  