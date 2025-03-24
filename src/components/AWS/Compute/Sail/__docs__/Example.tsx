import React, { FC } from "react";
  import Sail from "../Sail";
  
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
        <Sail width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  