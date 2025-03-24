import React, { FC } from "react";
  import Result from "../Result";
  
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
        <Result width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  