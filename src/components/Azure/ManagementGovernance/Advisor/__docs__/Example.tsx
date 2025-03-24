import React, { FC } from "react";
  import Advisor from "../Advisor";
  
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
        <Advisor width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  