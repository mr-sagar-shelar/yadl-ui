import React, { FC } from "react";
  import ThroughTheDesert from "../ThroughTheDesert";
  
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
        <ThroughTheDesert width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  