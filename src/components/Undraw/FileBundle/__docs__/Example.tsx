import React, { FC } from "react";
  import FileBundle from "../FileBundle";
  
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
        <FileBundle width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  