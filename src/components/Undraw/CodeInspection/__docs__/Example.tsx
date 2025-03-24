import React, { FC } from "react";
  import CodeInspection from "../CodeInspection";
  
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
        <CodeInspection width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  