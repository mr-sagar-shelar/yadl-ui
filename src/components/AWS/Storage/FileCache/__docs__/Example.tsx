import React, { FC } from "react";
  import FileCache from "../FileCache";
  
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
        <FileCache width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  