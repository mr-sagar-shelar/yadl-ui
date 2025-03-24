import React, { FC } from "react";
  import Java from "../Java";
  
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
        <Java width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  