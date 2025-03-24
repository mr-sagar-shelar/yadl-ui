import React, { FC } from "react";
  import DeepLens from "../DeepLens";
  
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
        <DeepLens width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  