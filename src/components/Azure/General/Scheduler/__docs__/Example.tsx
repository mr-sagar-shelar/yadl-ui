import React, { FC } from "react";
  import Scheduler from "../Scheduler";
  
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
        <Scheduler width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  