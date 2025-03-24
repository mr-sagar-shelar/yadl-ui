import React, { FC } from "react";
  import GamingController from "../GamingController";
  
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
        <GamingController width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  