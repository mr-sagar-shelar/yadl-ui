import React, { FC } from "react";
  import Haxe from "../Haxe";
  
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
        <Haxe width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  