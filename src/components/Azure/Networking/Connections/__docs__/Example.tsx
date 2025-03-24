import React, { FC } from "react";
  import Connections from "../Connections";
  
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
        <Connections width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  