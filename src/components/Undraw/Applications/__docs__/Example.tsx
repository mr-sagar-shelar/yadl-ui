import React, { FC } from "react";
  import Applications from "../Applications";
  
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
        <Applications width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  