import React, { FC } from "react";
  import Blender from "../Blender";
  
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
        <Blender width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  