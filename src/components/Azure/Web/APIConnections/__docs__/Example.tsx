import React, { FC } from "react";
  import APIConnections from "../APIConnections";
  
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
        <APIConnections width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  