import React, { FC } from "react";
  import EventGridTopics from "../EventGridTopics";
  
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
        <EventGridTopics width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  