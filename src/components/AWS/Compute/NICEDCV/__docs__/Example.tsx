import React, { FC } from "react";
  import NICEDCV from "../NICEDCV";
  
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
        <NICEDCV width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  