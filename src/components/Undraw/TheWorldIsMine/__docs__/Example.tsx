import React, { FC } from "react";
  import TheWorldIsMine from "../TheWorldIsMine";
  
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
        <TheWorldIsMine width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  