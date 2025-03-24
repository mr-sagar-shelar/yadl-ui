import React, { FC } from "react";
  import Genius from "../Genius";
  
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
        <Genius width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  