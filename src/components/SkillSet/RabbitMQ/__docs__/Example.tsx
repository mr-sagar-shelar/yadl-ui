import React, { FC } from "react";
  import RabbitMQ from "../RabbitMQ";
  
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
        <RabbitMQ width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  