import React, { FC } from "react";
  import ProcessExplorer from "../ProcessExplorer";
  
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
        <ProcessExplorer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  