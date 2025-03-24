import React, { FC } from "react";
  import Godot from "../Godot";
  
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
        <Godot width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  