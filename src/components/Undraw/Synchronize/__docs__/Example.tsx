import React, { FC } from "react";
  import Synchronize from "../Synchronize";
  
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
        <Synchronize width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  