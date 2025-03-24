import React, { FC } from "react";
  import SecureServer from "../SecureServer";
  
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
        <SecureServer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  