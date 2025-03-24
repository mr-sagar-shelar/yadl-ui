import React, { FC } from "react";
  import Lambda from "../Lambda";
  
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
        <Lambda width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  