import React, { FC } from "react";
  import EntraIDProtection from "../EntraIDProtection";
  
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
        <EntraIDProtection width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  