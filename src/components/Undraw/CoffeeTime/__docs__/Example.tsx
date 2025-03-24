import React, { FC } from "react";
  import CoffeeTime from "../CoffeeTime";
  
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
        <CoffeeTime width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  