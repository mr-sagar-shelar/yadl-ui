import React, { FC } from "react";
  import ContentCreator from "../ContentCreator";
  
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
        <ContentCreator width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  