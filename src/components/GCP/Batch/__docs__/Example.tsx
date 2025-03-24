import React, { FC } from "react";
  import Batch from "../Batch";
  
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
        <Batch width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  