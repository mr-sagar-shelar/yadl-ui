import React, { FC } from "react";
  import Functions from "../Functions";
  
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
        <Functions width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  