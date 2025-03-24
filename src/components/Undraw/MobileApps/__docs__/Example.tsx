import React, { FC } from "react";
  import MobileApps from "../MobileApps";
  
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
        <MobileApps width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  