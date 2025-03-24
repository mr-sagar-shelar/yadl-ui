import React, { FC } from "react";
  import CloudDns from "../CloudDns";
  
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
        <CloudDns width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  