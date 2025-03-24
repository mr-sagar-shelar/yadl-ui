import React, { FC } from "react";
  import VisualStudio from "../VisualStudio";
  
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
        <VisualStudio width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  