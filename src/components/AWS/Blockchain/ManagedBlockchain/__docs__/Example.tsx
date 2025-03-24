import React, { FC } from "react";
  import ManagedBlockchain from "../ManagedBlockchain";
  
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
        <ManagedBlockchain width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  