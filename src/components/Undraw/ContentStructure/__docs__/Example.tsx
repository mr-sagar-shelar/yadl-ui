import React, { FC } from "react";
  import ContentStructure from "../ContentStructure";
  
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
        <ContentStructure width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  