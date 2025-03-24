import React, { FC } from "react";
  import Programming from "../Programming";
  
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
        <Programming width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  