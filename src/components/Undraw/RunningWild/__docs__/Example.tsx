import React, { FC } from "react";
  import RunningWild from "../RunningWild";
  
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
        <RunningWild width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  