import React, { FC } from "react";
  import EventHubClusters from "../EventHubClusters";
  
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
        <EventHubClusters width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  