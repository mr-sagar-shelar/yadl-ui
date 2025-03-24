import React, { FC } from "react";
  import ExpressWorkflows from "../ExpressWorkflows";
  
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
        <ExpressWorkflows width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  