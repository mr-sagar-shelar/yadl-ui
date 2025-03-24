import React, { FC } from "react";
  import CodeDeploy from "../CodeDeploy";
  
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
        <CodeDeploy width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  