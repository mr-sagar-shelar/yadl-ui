import React, { FC } from "react";
  import GravitasGravitas from "../GravitasGravitas";
  
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
        <GravitasGravitas width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  