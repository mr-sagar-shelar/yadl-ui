import React, { FC } from "react";
  import CodeCommit from "../CodeCommit";
  
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
        <CodeCommit width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  