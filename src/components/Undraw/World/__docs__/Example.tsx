import React, { FC } from "react";
  import World from "../World";
  
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
        <World width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  