import React, { FC } from "react";
  import AutoCAD from "../AutoCAD";
  
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
        <AutoCAD width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  