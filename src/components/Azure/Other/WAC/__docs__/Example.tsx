import React, { FC } from "react";
  import WAC from "../WAC";
  
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
        <WAC width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  