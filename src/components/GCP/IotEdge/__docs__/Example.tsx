import React, { FC } from "react";
  import IotEdge from "../IotEdge";
  
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
        <IotEdge width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  