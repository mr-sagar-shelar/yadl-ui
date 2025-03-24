import React, { FC } from "react";
  import ProjectFeedback from "../ProjectFeedback";
  
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
        <ProjectFeedback width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  