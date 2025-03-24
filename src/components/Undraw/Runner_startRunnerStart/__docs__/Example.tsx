import React, { FC } from "react";
  import Runner_startRunnerStart from "../Runner_startRunnerStart";
  
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
        <Runner_startRunnerStart width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  