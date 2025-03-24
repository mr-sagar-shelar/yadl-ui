import React, { FC } from "react";
  import CLion from "../CLion";
  
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
        <CLion width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  