import React, { FC } from "react";
  import CoffeeScript from "../CoffeeScript";
  
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
        <CoffeeScript width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  