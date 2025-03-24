import React, { FC } from "react";
  import Floating from "../Floating";
  
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
        <Floating width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  