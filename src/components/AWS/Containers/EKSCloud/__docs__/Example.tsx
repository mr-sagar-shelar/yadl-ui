import React, { FC } from "react";
  import EKSCloud from "../EKSCloud";
  
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
        <EKSCloud width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  