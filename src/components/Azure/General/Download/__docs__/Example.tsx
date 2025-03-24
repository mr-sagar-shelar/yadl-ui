import React, { FC } from "react";
  import Download from "../Download";
  
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
        <Download width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  