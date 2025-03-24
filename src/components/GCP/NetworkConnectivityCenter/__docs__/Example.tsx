import React, { FC } from "react";
  import NetworkConnectivityCenter from "../NetworkConnectivityCenter";
  
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
        <NetworkConnectivityCenter width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  