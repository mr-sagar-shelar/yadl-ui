import React, { FC } from "react";
  import Drag from "../Drag";
  
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
        <Drag width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  