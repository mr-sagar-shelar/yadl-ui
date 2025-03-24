import React, { FC } from "react";
  import Anaconda from "../Anaconda";
  
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
        <Anaconda width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  