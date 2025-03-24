import React, { FC } from "react";
  import ProductTeardown from "../ProductTeardown";
  
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
        <ProductTeardown width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  