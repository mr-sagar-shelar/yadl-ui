import React, { FC } from "react";
  import VSCodium from "../VSCodium";
  
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
        <VSCodium width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  