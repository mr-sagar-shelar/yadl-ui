import React, { FC } from "react";
  import Scientist from "../Scientist";
  
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
        <Scientist width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  