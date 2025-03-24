import React, { FC } from "react";
  import Setup from "../Setup";
  
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
        <Setup width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  