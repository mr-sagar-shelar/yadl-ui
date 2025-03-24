import React, { FC } from "react";
  import Crystal from "../Crystal";
  
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
        <Crystal width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  