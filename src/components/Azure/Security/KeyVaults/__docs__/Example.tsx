import React, { FC } from "react";
  import KeyVaults from "../KeyVaults";
  
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
        <KeyVaults width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  