import React, { FC } from "react";
  import VPNClientWindows from "../VPNClientWindows";
  
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
        <VPNClientWindows width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  