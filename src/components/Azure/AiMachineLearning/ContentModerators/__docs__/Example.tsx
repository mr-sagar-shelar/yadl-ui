import React, { FC } from "react";
  import ContentModerators from "../ContentModerators";
  
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
        <ContentModerators width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  