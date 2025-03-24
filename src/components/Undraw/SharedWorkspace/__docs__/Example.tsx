import React, { FC } from "react";
  import SharedWorkspace from "../SharedWorkspace";
  
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
        <SharedWorkspace width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  