import React, { FC } from "react";
  import ConferenceCall from "../ConferenceCall";
  
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
        <ConferenceCall width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  