import React, { FC } from "react";
  import InProgress from "../InProgress";
  
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
        <InProgress width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  