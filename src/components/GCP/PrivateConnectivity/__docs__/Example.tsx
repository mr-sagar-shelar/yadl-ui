import React, { FC } from "react";
  import PrivateConnectivity from "../PrivateConnectivity";
  
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
        <PrivateConnectivity width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  