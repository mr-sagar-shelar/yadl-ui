import React, { FC } from "react";
  import PowerUp from "../PowerUp";
  
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
        <PowerUp width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  