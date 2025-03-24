import React, { FC } from "react";
  import Sync from "../Sync";
  
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
        <Sync width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  