import React, { FC } from "react";
  import Kafka from "../Kafka";
  
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
        <Kafka width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  