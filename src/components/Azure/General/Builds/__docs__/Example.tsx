import React, { FC } from "react";
  import Builds from "../Builds";
  
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
        <Builds width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  