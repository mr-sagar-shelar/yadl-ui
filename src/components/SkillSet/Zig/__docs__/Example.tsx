import React, { FC } from "react";
  import Zig from "../Zig";
  
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
        <Zig width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  