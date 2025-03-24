import React, { FC } from "react";
  import ActiveDirectoryConnectHealth from "../ActiveDirectoryConnectHealth";
  
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
        <ActiveDirectoryConnectHealth width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  