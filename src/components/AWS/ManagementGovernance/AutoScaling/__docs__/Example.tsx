import React, { FC } from "react";
  import AutoScaling from "../AutoScaling";
  
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
        <AutoScaling width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  