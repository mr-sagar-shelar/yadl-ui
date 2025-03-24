import React, { FC } from "react";
  import TrafficDirector from "../TrafficDirector";
  
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
        <TrafficDirector width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  