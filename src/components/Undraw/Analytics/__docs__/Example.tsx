import React, { FC } from "react";
  import Analytics from "../Analytics";
  
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
        <Analytics width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  