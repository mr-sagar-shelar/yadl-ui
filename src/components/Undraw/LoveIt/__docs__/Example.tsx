import React, { FC } from "react";
  import LoveIt from "../LoveIt";
  
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
        <LoveIt width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  