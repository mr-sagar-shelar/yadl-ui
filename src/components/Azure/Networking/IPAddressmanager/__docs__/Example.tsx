import React, { FC } from "react";
  import IPAddressmanager from "../IPAddressmanager";
  
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
        <IPAddressmanager width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  