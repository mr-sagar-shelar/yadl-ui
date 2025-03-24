import React, { FC } from "react";
  import CoupleLove from "../CoupleLove";
  
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
        <CoupleLove width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  