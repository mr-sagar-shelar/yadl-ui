import React, { FC } from "react";
  import WorkerContainerApp from "../WorkerContainerApp";
  
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
        <WorkerContainerApp width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  