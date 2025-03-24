import React, { FC } from "react";
  import Cloudflare from "../Cloudflare";
  
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
        <Cloudflare width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  