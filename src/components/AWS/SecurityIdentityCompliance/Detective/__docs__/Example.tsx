import React, { FC } from "react";
  import Detective from "../Detective";
  
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
        <Detective width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  