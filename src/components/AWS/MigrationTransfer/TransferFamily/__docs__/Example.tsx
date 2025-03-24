import React, { FC } from "react";
  import TransferFamily from "../TransferFamily";
  
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
        <TransferFamily width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  