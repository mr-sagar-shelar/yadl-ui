import React, { FC } from "react";
  import AssuredWorkloads from "../AssuredWorkloads";
  
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
        <AssuredWorkloads width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  