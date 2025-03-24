import React, { FC } from "react";
  import Julia from "../Julia";
  
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
        <Julia width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  