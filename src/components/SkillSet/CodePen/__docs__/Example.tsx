import React, { FC } from "react";
  import CodePen from "../CodePen";
  
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
        <CodePen width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  