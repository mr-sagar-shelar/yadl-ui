import React, { FC } from "react";
  import WebJobs from "../WebJobs";
  
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
        <WebJobs width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  