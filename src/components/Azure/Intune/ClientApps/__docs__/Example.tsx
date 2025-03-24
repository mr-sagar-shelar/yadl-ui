import React, { FC } from "react";
  import ClientApps from "../ClientApps";
  
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
        <ClientApps width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  