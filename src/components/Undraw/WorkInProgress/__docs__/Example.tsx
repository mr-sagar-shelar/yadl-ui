import React, { FC } from "react";
  import WorkInProgress from "../WorkInProgress";
  
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
        <WorkInProgress width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  