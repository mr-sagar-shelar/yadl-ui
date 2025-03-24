import React, { FC } from "react";
  import Scala from "../Scala";
  
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
        <Scala width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  