import React, { FC } from "react";
  import CodeStar from "../CodeStar";
  
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
        <CodeStar width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  