import React, { FC } from "react";
  import DocumentAi from "../DocumentAi";
  
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
        <DocumentAi width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  