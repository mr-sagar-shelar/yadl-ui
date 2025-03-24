import React, { FC } from "react";
  import Powerful from "../Powerful";
  
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
        <Powerful width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  