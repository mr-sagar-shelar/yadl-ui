import React, { FC } from "react";
  import ThreeJS from "../ThreeJS";
  
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
        <ThreeJS width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  