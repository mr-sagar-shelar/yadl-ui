import React, { FC } from "react";
  import VirtualVisitsBuilder from "../VirtualVisitsBuilder";
  
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
        <VirtualVisitsBuilder width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  