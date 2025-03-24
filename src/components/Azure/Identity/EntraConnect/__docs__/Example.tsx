import React, { FC } from "react";
  import EntraConnect from "../EntraConnect";
  
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
        <EntraConnect width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  