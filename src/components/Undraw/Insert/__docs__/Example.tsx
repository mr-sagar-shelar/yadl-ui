import React, { FC } from "react";
  import Insert from "../Insert";
  
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
        <Insert width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  