import React, { FC } from "react";
  import DocumentDB from "../DocumentDB";
  
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
        <DocumentDB width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  