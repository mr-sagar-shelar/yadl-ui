import React, { FC } from "react";
  import Expecting from "../Expecting";
  
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
        <Expecting width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  