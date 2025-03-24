import React, { FC } from "react";
  import Thoughts from "../Thoughts";
  
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
        <Thoughts width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  