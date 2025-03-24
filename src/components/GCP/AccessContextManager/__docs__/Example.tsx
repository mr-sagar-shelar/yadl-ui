import React, { FC } from "react";
  import AccessContextManager from "../AccessContextManager";
  
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
        <AccessContextManager width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  