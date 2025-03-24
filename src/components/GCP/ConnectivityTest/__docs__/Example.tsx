import React, { FC } from "react";
  import ConnectivityTest from "../ConnectivityTest";
  
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
        <ConnectivityTest width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  