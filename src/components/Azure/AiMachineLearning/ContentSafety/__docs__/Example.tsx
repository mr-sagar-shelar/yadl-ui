import React, { FC } from "react";
  import ContentSafety from "../ContentSafety";
  
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
        <ContentSafety width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  