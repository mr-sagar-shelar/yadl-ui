import React, { FC } from "react";
  import FreeServices from "../FreeServices";
  
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
        <FreeServices width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  