import React, { FC } from "react";
  import IdeasFlow from "../IdeasFlow";
  
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
        <IdeasFlow width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  