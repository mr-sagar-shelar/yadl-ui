import React, { FC } from "react";
  import Warning from "../Warning";
  
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
        <Warning width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  