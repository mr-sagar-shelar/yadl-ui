import React, { FC } from "react";
  import SpookySelf from "../SpookySelf";
  
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
        <SpookySelf width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  