import React, { FC } from "react";
  import EventHubs from "../EventHubs";
  
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
        <EventHubs width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  