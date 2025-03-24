import React, { FC } from "react";
  import CodeCatalyst from "../CodeCatalyst";
  
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
        <CodeCatalyst width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  