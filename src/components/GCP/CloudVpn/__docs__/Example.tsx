import React, { FC } from "react";
  import CloudVpn from "../CloudVpn";
  
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
        <CloudVpn width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  