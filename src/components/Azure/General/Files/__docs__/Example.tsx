import React, { FC } from "react";
  import Files from "../Files";
  
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
        <Files width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  