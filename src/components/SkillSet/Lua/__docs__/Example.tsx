import React, { FC } from "react";
  import Lua from "../Lua";
  
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
        <Lua width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  