import React, { FC } from "react";
  import PowerPlatform from "../PowerPlatform";
  
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
        <PowerPlatform width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  