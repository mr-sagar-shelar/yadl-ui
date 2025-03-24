import React, { FC } from "react";
  import JourneyHub from "../JourneyHub";
  
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
        <JourneyHub width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  