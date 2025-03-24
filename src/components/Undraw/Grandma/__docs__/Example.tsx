import React, { FC } from "react";
  import Grandma from "../Grandma";
  
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
        <Grandma width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  