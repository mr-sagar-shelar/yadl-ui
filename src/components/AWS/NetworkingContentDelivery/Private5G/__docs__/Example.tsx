import React, { FC } from "react";
  import Private5G from "../Private5G";
  
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
        <Private5G width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  