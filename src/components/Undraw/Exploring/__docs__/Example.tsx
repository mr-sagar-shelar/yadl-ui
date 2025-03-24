import React, { FC } from "react";
  import Exploring from "../Exploring";
  
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
        <Exploring width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  