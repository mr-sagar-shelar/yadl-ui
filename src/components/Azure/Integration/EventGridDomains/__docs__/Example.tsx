import React, { FC } from "react";
  import EventGridDomains from "../EventGridDomains";
  
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
        <EventGridDomains width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  