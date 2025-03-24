import React, { FC } from "react";
  import Connect from "../Connect";
  
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
        <Connect width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  