import React, { FC } from "react";
  import QuickSight from "../QuickSight";
  
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
        <QuickSight width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  