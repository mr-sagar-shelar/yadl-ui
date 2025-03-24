import React, { FC } from "react";
  import HotBeverage from "../HotBeverage";
  
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
        <HotBeverage width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  