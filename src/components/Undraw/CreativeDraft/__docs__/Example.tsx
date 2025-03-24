import React, { FC } from "react";
  import CreativeDraft from "../CreativeDraft";
  
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
        <CreativeDraft width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  