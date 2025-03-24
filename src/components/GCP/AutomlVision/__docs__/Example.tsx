import React, { FC } from "react";
  import AutomlVision from "../AutomlVision";
  
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
        <AutomlVision width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  