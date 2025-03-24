import React, { FC } from "react";
  import Pancakes from "../Pancakes";
  
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
        <Pancakes width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  