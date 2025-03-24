import React, { FC } from "react";
  import Campfire from "../Campfire";
  
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
        <Campfire width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  