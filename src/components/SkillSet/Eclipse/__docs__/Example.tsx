import React, { FC } from "react";
  import Eclipse from "../Eclipse";
  
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
        <Eclipse width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  