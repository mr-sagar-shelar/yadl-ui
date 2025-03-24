import React, { FC } from "react";
  import FSx from "../FSx";
  
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
        <FSx width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  