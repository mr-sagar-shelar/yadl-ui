import React, { FC } from "react";
  import Specs from "../Specs";
  
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
        <Specs width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  