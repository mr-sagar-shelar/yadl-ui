import React, { FC } from "react";
  import MongoDB from "../MongoDB";
  
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
        <MongoDB width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  