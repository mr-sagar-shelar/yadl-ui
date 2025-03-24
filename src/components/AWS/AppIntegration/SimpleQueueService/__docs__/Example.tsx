import React, { FC } from "react";
  import SimpleQueueService from "../SimpleQueueService";
  
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
        <SimpleQueueService width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  