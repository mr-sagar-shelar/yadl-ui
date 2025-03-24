import React, { FC } from "react";
  import Regex from "../Regex";
  
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
        <Regex width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  