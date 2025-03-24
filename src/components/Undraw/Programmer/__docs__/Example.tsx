import React, { FC } from "react";
  import Programmer from "../Programmer";
  
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
        <Programmer width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  