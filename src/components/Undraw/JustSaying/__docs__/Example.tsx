import React, { FC } from "react";
  import JustSaying from "../JustSaying";
  
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
        <JustSaying width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  