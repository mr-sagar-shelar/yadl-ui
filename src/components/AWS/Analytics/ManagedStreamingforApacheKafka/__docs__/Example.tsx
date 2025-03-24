import React, { FC } from "react";
  import ManagedStreamingforApacheKafka from "../ManagedStreamingforApacheKafka";
  
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
        <ManagedStreamingforApacheKafka width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  