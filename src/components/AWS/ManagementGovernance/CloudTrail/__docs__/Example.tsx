import React, { FC } from "react";
  import CloudTrail from "../CloudTrail";
  
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
        <CloudTrail width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  