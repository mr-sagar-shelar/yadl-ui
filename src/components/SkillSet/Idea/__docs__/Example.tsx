import React, { FC } from "react";
  import Idea from "../Idea";
  
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
        <Idea width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  