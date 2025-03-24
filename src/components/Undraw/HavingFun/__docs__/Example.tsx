import React, { FC } from "react";
  import HavingFun from "../HavingFun";
  
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
        <HavingFun width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  