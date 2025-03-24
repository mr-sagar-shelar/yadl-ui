import React, { FC } from "react";
  import PrivateLinkServices from "../PrivateLinkServices";
  
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
        <PrivateLinkServices width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  