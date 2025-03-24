import React, { FC } from "react";
  import Server from "../Server";
  
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
        <Server width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  