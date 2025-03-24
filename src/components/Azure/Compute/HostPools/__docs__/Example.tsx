import React, { FC } from "react";
  import HostPools from "../HostPools";
  
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
        <HostPools width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  