import React, { FC } from "react";
  import PublicIPPrefixes from "../PublicIPPrefixes";
  
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
        <PublicIPPrefixes width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  