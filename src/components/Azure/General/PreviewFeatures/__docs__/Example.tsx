import React, { FC } from "react";
  import PreviewFeatures from "../PreviewFeatures";
  
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
        <PreviewFeatures width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  