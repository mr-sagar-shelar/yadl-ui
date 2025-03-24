import React, { FC } from "react";
  import Bonsai from "../Bonsai";
  
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
        <Bonsai width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  