import React, { FC } from "react";
  import Controls from "../Controls";
  
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
        <Controls width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  