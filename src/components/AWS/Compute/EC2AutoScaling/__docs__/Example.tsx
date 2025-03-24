import React, { FC } from "react";
  import EC2AutoScaling from "../EC2AutoScaling";
  
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
        <EC2AutoScaling width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  