import React, { FC } from "react";
  import IdentityPlatform from "../IdentityPlatform";
  
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
        <IdentityPlatform width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  