import React, { FC } from "react";
  import Revenue from "../Revenue";
  
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
        <Revenue width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  