import React, { FC } from "react";
  import ApplicationGroup from "../ApplicationGroup";
  
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
        <ApplicationGroup width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  