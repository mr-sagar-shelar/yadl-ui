import React, { FC } from "react";
  import StaticApps from "../StaticApps";
  
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
        <StaticApps width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  