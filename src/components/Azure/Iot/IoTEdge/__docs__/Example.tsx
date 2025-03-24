import React, { FC } from "react";
  import IoTEdge from "../IoTEdge";
  
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
        <IoTEdge width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  