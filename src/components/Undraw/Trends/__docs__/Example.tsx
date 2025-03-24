import React, { FC } from "react";
  import Trends from "../Trends";
  
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
        <Trends width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  