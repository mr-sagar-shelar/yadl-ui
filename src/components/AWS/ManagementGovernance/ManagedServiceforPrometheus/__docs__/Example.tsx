import React, { FC } from "react";
  import ManagedServiceforPrometheus from "../ManagedServiceforPrometheus";
  
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
        <ManagedServiceforPrometheus width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  