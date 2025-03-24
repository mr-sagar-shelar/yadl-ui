import React, { FC } from "react";
  import Backlog from "../Backlog";
  
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
        <Backlog width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  