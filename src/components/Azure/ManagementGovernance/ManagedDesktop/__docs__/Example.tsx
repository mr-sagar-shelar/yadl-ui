import React, { FC } from "react";
  import ManagedDesktop from "../ManagedDesktop";
  
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
        <ManagedDesktop width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  