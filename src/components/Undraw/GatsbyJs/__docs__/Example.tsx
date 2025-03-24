import React, { FC } from "react";
  import GatsbyJs from "../GatsbyJs";
  
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
        <GatsbyJs width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  