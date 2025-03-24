import React, { FC } from "react";
  import Gulp from "../Gulp";
  
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
        <Gulp width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  