import React, { FC } from "react";
  import RuntimeConfig from "../RuntimeConfig";
  
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
        <RuntimeConfig width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  