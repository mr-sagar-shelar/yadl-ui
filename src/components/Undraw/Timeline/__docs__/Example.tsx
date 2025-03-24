import React, { FC } from "react";
  import Timeline from "../Timeline";
  
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
        <Timeline width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  