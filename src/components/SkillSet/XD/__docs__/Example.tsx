import React, { FC } from "react";
  import XD from "../XD";
  
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
        <XD width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  