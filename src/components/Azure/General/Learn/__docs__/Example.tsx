import React, { FC } from "react";
  import Learn from "../Learn";
  
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
        <Learn width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  