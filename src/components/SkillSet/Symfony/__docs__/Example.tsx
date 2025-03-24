import React, { FC } from "react";
  import Symfony from "../Symfony";
  
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
        <Symfony width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  