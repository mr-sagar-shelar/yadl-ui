import React, { FC } from "react";
  import RemotelyRemotely from "../RemotelyRemotely";
  
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
        <RemotelyRemotely width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  