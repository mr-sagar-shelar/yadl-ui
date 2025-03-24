import React, { FC } from "react";
  import FunctionApps from "../FunctionApps";
  
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
        <FunctionApps width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  