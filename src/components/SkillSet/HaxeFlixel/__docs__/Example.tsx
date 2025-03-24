import React, { FC } from "react";
  import HaxeFlixel from "../HaxeFlixel";
  
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
        <HaxeFlixel width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  