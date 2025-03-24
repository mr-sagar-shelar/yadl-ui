import React, { FC } from "react";
  import AWS from "../AWS";
  
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
        <AWS width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  