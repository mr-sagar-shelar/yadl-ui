import React, { FC } from "react";
  import GraphQL from "../GraphQL";
  
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
        <GraphQL width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  