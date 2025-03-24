import React, { FC } from "react";
  import WinterSkating from "../WinterSkating";
  
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
        <WinterSkating width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  